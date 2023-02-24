'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/:name', async function (request, reply) {
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    return reply.sendFile('video.html')
  })
}
