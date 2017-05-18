close all;clear all;clc
printf("Initializing script...BW3\n");
printf("Fetching arguments\n");

arg_list = argv ();
filename = "doc-test.jpg";
outputFile = "docOutput.jpg";

pkg load image;

windowSize = 7; 
K=0.07;
printf("Loading image package...\n");
pkg load image;

%Step 1
printf ("Reading image..\n");
printf("step 1\n");
gim = imread( filename );
printf("Processing image...\n");

if size(gim,3)==3
    gim=rgb2gray(gim);
end

dim=double(gim);

%step 2
printf("step 2\n");
b = (1/windowSize)*ones(1,windowSize);
a=1;

%step 3
printf("step 3\n");
[M,N]=size(dim);
A = dim(1:2:end,:);  % odd matrix
B = dim(2:2:end,:);  % even matrix
FB = fliplr(B);     % flip even rows
C = ones(size([A;FB])); % prealocate matrix
C(1:2:end,:) = A;    % fill odd rows
C(2:2:end,:) = FB;    % fill even rows(flipped)
signal = reshape(C',1,[]);    % reshape the matrix into 1D

%step 4
printf("step 4\n");
filtered=filter(b,a,signal);

%step 5
printf("step 5\n");
filtered_m = reshape(filtered,M,N)';    % reshape the signal into 2D
A = filtered_m(1:2:end,:);  % odd matrix
B = filtered_m(2:2:end,:);  % even matrix
FB = fliplr(B);     % flip even rows
C = ones(size([A;FB])); % prealocate matrix
C(1:2:end,:) = A;    % fill odd rows
C(2:2:end,:) = B;    % fill even rows(flipped)

reconstructed_m = C;
%step 6
printf("step 6\n");
BW = im2bw(C, K);
imwrite(BW,"docresult.jpg");

printf("Applying filter\n");

imshow(BW);




