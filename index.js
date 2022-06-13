let {Pool} = require('pg');

(async ()=>{
    let pool = new Pool({
        host:'localhost',
        user:'postgres',
        password:'LinuxDev99',
        database: 'RegistroPractias',
        port:5432
    });
    await pool.query('SELECT * FROM estudiantes', (err, res)=>{
        console.log(res.rows)
        console.log(err)
    });
    console.log('Hola')
})()