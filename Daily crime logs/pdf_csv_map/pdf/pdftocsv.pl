#!/usr/bin/perl

use warnings;

opendir(DIR, ".");
my @files = readdir(DIR);
closedir(DIR);

foreach my $file (@files) {

    print $file . "\n";

    if($file =~ /\.pdf$/) {

        system("pdftotext -layout $file");
        $file =~ s/\.pdf$/.txt/;
        print $file . "\n"; 
        system("./texttocsv.pl $file");
        $file =~ s/\.txt$/.csv/;
        
    }

}

system("cp header out");
system("cat *.csv >> out");
system("mv out out.csv");
