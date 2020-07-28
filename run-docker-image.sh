if [ -z "$1" ]
  then
    echo "No argument supplied"
fi

docker run stupid-odd-number npm run start $1
