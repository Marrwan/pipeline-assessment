<!-- Explain how this API (/howold/{dob}) can be used to Calculate and return the age of a person, given their date of birth (dob) as query parameters to GET /howold -->

## How old is {name}?

### Query Parameters

| Parameter | Type | Required | Description |
| --------- | ---- | -------- | ----------- |
| dob | string | Yes | Date of Birth |

### Response

| Status Code | Description |
| ----------- | ----------- |
| 200 | Success |

## Example Request

```bash
curl -X GET http://localhost:3000/howold?dob=01-01-1990
```

## Example Response

```json
{
  "age": 27
}
```

[]: # Language: javascript
[]: # Path: app.js
[]: # Path: DETAILS.md
