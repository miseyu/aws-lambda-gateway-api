const projectId = '/* @echo PROJECT_ID */' || ''
const bigquery = require('gcloud').bigquery({
  projectId,
  credentials: {
    private_key_id: "/* @echo PRIVATE_KEY_ID */",
    private_key: "/* @echo PRIVATE_KEY */"
    client_email: "/* @echo CLIENT_EMAIL */",
    client_id: "/* @echo CLIENT_ID */",
    type: "service_account"
  }
})

exports.handler = (event, context)=> {
  const query = "SELECT id, sex_id, age, reg_date FROM [develop.users] LIMIT 20"
  bigquery.query(query, (err, rows, nextQuery) => {
    if (err) {
      console.log('err::', err)
      return
    }
    context.succeed(rows)
  })
}
