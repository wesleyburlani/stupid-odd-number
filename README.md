# Stupid Odd Number Verification
> Verifies if a number is or not a stupid odd number.

A stupid odd number is a number greater than 10, up to 1000 characters that contains only odd numbers, in sequence.

For example:

* 1357
* 13579
* 13579111315
* 13579111315171931

The following number are NOT stupid odd numbers:

* 11
* 137
* 13579111315171921

## Dependencies

* Docker

## Running Locally ##

Since this is a terminal node program it should be runned using a linux terminal

The first step its to build the docker image on your local machine. To do that just run the following script:

```sh
./build-docker-image.sh
```

now, you can see the created image using the command `docker images | grep stupid-odd-number`.

The next step its to run unit tests:

```sh
./run-tests.sh
```

Now, just run the following command to execute the program.
>obs: don't forget about passing the number input argument

```sh
./run-docker-image.sh <input_number>
```
