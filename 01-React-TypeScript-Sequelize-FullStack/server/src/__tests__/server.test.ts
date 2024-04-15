
// import request from 'supertest'
// import server from '../server'

// describe('GET /api', () => {
//     test('Should send back a json response', async () => {
//         const res = await request(server).get('/api');
//         //Endpoint bien realizado deberia regresar un codigo de estatus 200
//         expect(res.status).toBe(200)
//         //y en este caso es un json lo que esperamos recibir
//         expect(res.headers['content-type']).toEqual(expect.stringContaining('application/json'))

//         expect(res.body.msg).toBe('Desde API')

//         expect(res.status).not.toBe(404)
//     })
// });