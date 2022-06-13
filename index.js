let {Pool} = require('pg');

(async ()=>{
    let pool = new Pool({
        host:'localhost',
        user:'postgres',
        password:'LinuxDev99',
        database: 'RegistroPractias',
        port:5432
    });
    /**Obtencion de todos los datos */
    let result = await pool.query('SELECT * FROM estudiantes');
    console.log(result.rows);

    /**Creacion de un nuevo usuario */
    //await pool.query('INSERT INTO estudiantes VALUES ($1, $2, $3)', [3, 'Linux', 'Server']);

    /**Actualiza */
    await pool.query('UPDATE Estudiantes SET Nombre = $1 WHERE Nombre = $2', ['Anthony', 'Karen']);

    /**Elimina */
    await pool.query('DELETE FROM Estudiantes WHERE Nombre = $1', ['Anthony'])


})()