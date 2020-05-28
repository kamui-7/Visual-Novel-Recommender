# Visual Novel Reccomender

This is a visual novel reccomender I made while learning django and react. If you enter a [vndb](https://www.vndb.org) username, you can see the vns that they would like to play.

## Installation

### Data

The data is pretty large so it is compressed into a 7z file, so all you have to do is unzip using 7zip.

### Install dependencies

Frontend:

```
cd frontend/
npm install
```

Backend:

```
pip install -r requirements.txt
```

## Run

To start the server, you simply have to:

```
cd backend
python manage.py runserver
```

On another terminal,

```
cd frontend
npm start
```
