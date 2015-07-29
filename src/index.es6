const projectId = '/* @echo PROJECT_ID */' || ''
const bigquery = require('gcloud').bigquery({
  projectId,
  credentials: {
    private_key_id: "/* @echo PRIVATE_KEY_ID */",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDWU2h1Wne5sMGs\nkf9ZPxoECI3OQDIQPmPsZnACfSDGaVwm3yaeElxPn2cObFu1YMoyBBVSrgoFGQGT\nL+6nrvzyISLuIg5S8Cp7LetA8Mz4qlGtAmCa6hWVsct/mlvcLGF9B1ikYSFIXm5F\n7isUjk3OtfPsMpZ94kfSpt83ZutQpw4AUtWERH9tZYn0blvMuDiWpqq7LHcmbrCN\n8hmA0iOODW3GyDiCWNZw1tfbJ4wATCrh2n33C6FwB1oZcV/bBQoChhP/JJS7C9cc\niCmxxpcx9Z1T8reld5ap574rAFEPFi+jBe8STdWYnMg30QnhP04eGdVHY2UeS9ys\nlSKZdXUDAgMBAAECggEAKv6iduBGIkcWIyNKoUGqW2LH57czE9UgQH0wPR+S4pqi\nNN4RJiayw/pLNzZ/kzwuc6gkCukE847XpQo5iwPslDoXgsPsMbEiJIHKrsVfqQap\nydYvQQRyfgwjsZ5qjRmOGQHPQ3KEtbrTzk1/8Oi3LR+NJjXjwK8TD2wQXVHVJOFv\n/7uMQ+GMhroDFt3W07Bjsm6VJ5H2jXQrv/7A275Ai5fpj4mUS+mE1w1yBX67uNIm\nTpyelC77eVBy4QA2aHbA7bbaViQ4Ifsf3oHS6a2+UxFCCAo/A/xSbYJSMPkPIWC7\n1YL4TYIUdKgqO/OYbkh6h4SwsrEXKPSaCeh8CqNkcQKBgQD+JPH/kCKzkM295Fjb\n4MqDpmHg8wzllhYVS6CxMx3f8AXPc3wc28VvX8XlMAxkrAA1+TCnT2H41WeBYmZK\nj5lvZCQFZmsZjdckgSdSLggNF+HHXE6WmsWTAt/pCp0havvWQa+qKVhx/7xTf6s3\nF6mx3NFJRI4ZdEnH2B6HtnC5iQKBgQDX5AhfuuM5dwQQ0j3uBrLQyYOEFokG+P6k\nLI7OTu3Cey9qnj4mVNDhhAYor2oH7e8rZYAqGMjrBIPrdTnJ8ZybkE8XFiczg+kD\nMJRlVvwNRQ+C1cYRYbWvuxx6k06aICSbWNTcbshytnFenb8ypqwzoaCOg/n25qse\ndW3c7xAzKwKBgFHC2Qf6+u8B+u7Ic73pR72q3XpdNxz1eA1J01yusUHGGlhvMtKl\n8ZKvIR9modYRb8/tZzWsWDyRi0cYvQfnwtkPQndqR7Jk634W/ut1W6m6sSxOCgpx\nqHZvSlHS1FJX9MUtRLJdstKaD6BdRlvnBPTvsXT81SpjOwlMAiZvDzzhAoGAT5xI\nNjztY5huyGEu8yJHOFTHCaNhvk99Xz8LHire5DOWxaM62dm2+SI9Py2IVQo5gvA3\n9c4T8Q5GM0KUH9LX5Emv0JybshR3jXSRlFkiMyZ/VMjN9ETqwbWnB9BgUNd/iEWW\noP69Lgf3AGP9SIlLwPJeCY/DUne3LFEzRSBnAecCgYAt2cghzfoLLLjV3p2yil/k\n7U3ifpCyZ7w1zSh4pKHjB6vx/6nS2Vrts+aHSJ2/22D5oz0Csle7WiyxKU7vjwID\nU9ulhlsXQ/3ttJ1J4RH7NAYMQ+4psBWfnK25jUQUlQZ1upcTJFtWc7OnKETO2NUt\nU6KR99JlC0y6CqcoSuVaNA\u003d\u003d\n-----END PRIVATE KEY-----\n",
    client_email: "/* @echo CLIENT_EMAIL */",
    client_id: "/* @echo CLIENT_ID */",
    type: "service_account"
  }
})

exports.handler = (event, context)=> {
  const query = "SELECT * FROM [develop.users] LIMIT 20"
  bigquery.query(query, (err, rows, nextQuery) => {
    if (err) {
      console.log('err::', err)
      return
    }
    context.succeed(rows)
  })
}
