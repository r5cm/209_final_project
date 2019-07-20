#!/usr/bin/perl

use warnings;



open FILE, $ARGV[0];
my @lines = <FILE>;
close FILE;

my $csv = $ARGV[0];
$csv =~ s/\.txt$/.csv/;

open CSV, ">$csv";

my @cols = ("Date", "Case", "Category", "Incident", "Location", "Synopsis", "Disposition");

#print CSV join(',', @cols) . "\n";

my $i = 1;

my $filedate;

my $flag = 0;

my @offset = ();
my @outrow = ();

foreach my $line (@lines) {

    $line =~ s/\n//;
    $line =~ s/\r//;

    if($i > 5 && ($line =~ /^$filedate/ || $line eq '' || $i == scalar(@lines))) {
        if($flag > 0) {
            print("### " . join(',', @outrow) . "\n");

            for(my $j = 0; $j < scalar(@outrow); $j++) {
                $outrow[$j] = "\"" . $outrow[$j] . "\"";
            }

            print CSV join(',', @outrow) . "\n";
            $flag = 0;
        }     
    }   

    if($line eq '') { $i++; next; }

    print("$i\t$line\n");

    if($i == 3 && $line =~ /\sto\s/) {
        $line =~ /([0-9]{2})\/([0-9]{2})\/([0-9]{4})/;
        my $m = $1*1.0;
        my $d = $2*1.0;
        my $y = substr($3,2,2);

        $filedate = "$m/$d/$y";

        print("### Date: $filedate\n");

    }
    elsif(($i == 5 || $line =~ /^\f/) && ($line =~ /Date/)) {
    
        my $j = 0;
        foreach my $col (@cols) {
            $line =~ /($col)/;
            my $pos = $-[0];
            if($line =~ /^\f/) {
                $offset[$j] = $pos - 1;
            }
            else {
                $offset[$j] = $pos;
            }
            $j++;
        }


        print("### Offsets: " . join(',', @offset) . "\n");

    }
        
    

    if($i > 5 && ((! $filedate) && (! $offset[0]))) {
        print("ERROR with header\n");
        last;
    }


    if($i > 5 && ($line =~ /^$filedate/)) {

        $flag = $i;
        @outrow = ();

        for(my $k = 0; $k < scalar(@offset); $k++) {
            my $field_end;

            if($k == scalar(@offset) - 1) {
                $field_end = length($line);
            }
            else { $field_end = $offset[$k + 1]; }

            my $str = substr($line, $offset[$k], $field_end - $offset[$k]);
            $str =~ s/\s+$//;
            $str =~ s/\s+/ /g;

            if($k == 0) {
                my $count = () = $str =~ /^([0-9\/]+)\s([0-9:]+)/;
                #print "@@@ $str " . $count . " $1|$2\n";
                if($count == 2) {
                    $str = "$1 $2";
                }
                else { $str = ""; }
            }

            push(@outrow, $str);
        }     

    }
    elsif($i > 5 && $flag > 0) {

        for(my $k = 0; $k < scalar(@offset); $k++) {
            my $field_end;

            if($offset[$k] > length($line) - 1) { next; }

            if($k == scalar(@offset) - 1 || $offset[$k + 1] > length($line) - 1) {
                $field_end = length($line);
            }
            else { $field_end = $offset[$k + 1]; }

            my $str = substr($line, $offset[$k], $field_end - $offset[$k]);
            $str =~ s/\s+$//;
            $str =~ s/\s+/ /g;
            unless($str eq '') { $outrow[$k] = $outrow[$k] . " $str"; }
        } 
        
    }
     
    
    $i++;

}

close CSV;
