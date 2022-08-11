<!-- Explain how this API (/howold/{dob}) can be used to Calculate and return the age of a person, given their date of birth (dob) as query parameters to GET /howold -->


### Query Parameters

| Parameter | Type | Required | Description |
| --------- | ---- | -------- | ----------- |
| dob | string | Yes | Date of Birth |

### Response

| Status Code | Description |
| ----------- | ----------- |
| 200 | Success |

## API Endpoints

### GET / 
    curl -X GET http://localhost:3000/

### GET /howold

    curl -X GET "http://localhost:3000/howold?dob=01-01-1980"

    curl -X GET "http://localhost:3000/howold?dob=01-01-1980" -H "Content-Type: application/json" -d '{"dob": "01-01-1980"}'


## Example Request

```bash
curl -X GET http://localhost:3000/howold?dob=01-01-1990
```

## Example Response

```json
{
    "status": "success",
    "age": 23
}
```

# Example Error Response
    
    ```json
    {
        "status": "error",
        "message": "Invalid date of birth"
    }
    ```


