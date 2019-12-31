# Metric Service Problem
This project solves a simple metric logging and reporting problem for a given time window, which is currently one hour.

## Installation

Clone the repo and move into project directory

`git clone git@github.com:tdecker7/flyreel.git && cd flyreel`

Install dependencies

`npm i`

Run simple tests

`npm test`

Start the server

`npm start`

_default start is `http://localhost:3000`. Another port can be defined by local env_
`npm start`


## Routes
### POST
`http://localhost:3000/metric/:key`
Post body example:
```
{
    "value": 5
}
```
Expected Response:
status: `200`
reponse body: `{}`

### GET
`http://localhost:3000/metric/:key/sum`

Expected Response:
status: `200`
response body: 
```
{
    "value": <sum_of_metric_values>
}
```

*NOTE:* Will return status `404` if the `:key` defined does not exist in the store.
