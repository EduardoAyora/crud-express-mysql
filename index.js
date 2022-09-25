const express = require('express')
var bodyParser = require('body-parser')

const db = require('./db')

const app = express()
app.use(bodyParser.json())
const port = 3000

app
  .route('/empleados')
  .get(async (req, res) => {
    const rows = await db.query(`SELECT * FROM empleado`)
    res.json(rows)
  })
  .post(async (req, res) => {
    const { nombre, cedula, titulo, idDepartamento } = req.body
    const result = await db.query(
      `INSERT INTO empleado 
      (nombre, cedula, titulo, departamento) 
      VALUES 
      ("${nombre}", "${cedula}", "${titulo}", ${idDepartamento})`
    )
    let message = 'Error guardando'
    if (result.affectedRows) {
      message = 'Se ha guardo con éxito'
    }

    res.json({ message })
  })

app.put('/empleados/:id', async (req, res) => {
  const { nombre, cedula, titulo, idDepartamento } = req.body
  const { id } = req.params
  const result = await db.query(
    `UPDATE empleado 
    SET nombre="${nombre}", cedula="${cedula}", titulo="${titulo}", departamento=${idDepartamento}
    WHERE id=${id}`
  )
  let message = 'Error guardando'
  if (result.affectedRows) {
    message = 'Se ha guardo con éxito'
  }

  res.json({ message })
})

app.delete('/empleados/:id', async (req, res) => {
  const { id } = req.params
  const result = await db.query(`DELETE FROM empleado WHERE id=${id}`)
  let message = 'Error eliminando'
  if (result.affectedRows) {
    message = 'Se ha eliminado con éxito'
  }

  res.json({ message })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
