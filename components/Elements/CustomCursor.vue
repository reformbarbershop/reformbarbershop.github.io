<template>
  <div>
    <div class="cursor cursor--small" />
    <canvas class="cursor cursor--canvas" resize />
  </div>
</template>

<script>
import paper from 'paper'

export default {
  name: 'CustomCursor',
  mounted: () => {
    let clientX = -100
    let clientY = -100
    const innerCursor = document.querySelector('.cursor--small')

    const initCursor = () => {
      document.addEventListener('mousemove', (e) => {
        clientX = e.clientX
        clientY = e.clientY
      })

      const render = () => {
        innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`

        requestAnimationFrame(render)
      }
      requestAnimationFrame(render)
    }

    initCursor()

    document.querySelector('iframe, .el-dialog').addEventListener('mouseenter', () => {
      document.querySelector('.cursor').style.display = 'none'
      document.querySelector('.cursor--canvas').style.display = 'none'
    })

    document.querySelector('iframe, .el-dialog').addEventListener('mouseleave', () => {
      document.querySelector('.cursor').style.display = 'block'
      document.querySelector('.cursor--canvas').style.display = 'block'
    })

    let lastX = 0
    let lastY = 0
    let group

    const initCanvas = () => {
      const canvas = document.querySelector('.cursor--canvas')
      paper.setup(canvas)
      const strokeColor = 'rgba(0, 176, 104, 1)'
      const strokeWidth = 2
      const segments = 8
      const radius = 15

      const polygon = new paper.Path.RegularPolygon(
        new paper.Point(0, 0),
        segments,
        radius
      )
      polygon.strokeColor = strokeColor
      polygon.strokeWidth = strokeWidth
      polygon.smooth()
      group = new paper.Group([polygon])
      group.applyMatrix = false

      const lerp = (a, b, n) => {
        return (1 - n) * a + n * b
      }

      paper.view.onFrame = () => {
        lastX = lerp(lastX, clientX, 0.2)
        lastY = lerp(lastY, clientY, 0.2)
        group.position = new paper.Point(lastX, lastY)
      }
    }

    initCanvas()
  }
}
</script>
