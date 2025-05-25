// "use client"

// import { useEffect, useRef } from "react"

// export function AnimatedBackground() {
//   const canvasRef = useRef<HTMLCanvasElement>(null)

//   useEffect(() => {
//     const canvas = canvasRef.current
//     if (!canvas) return

//     const ctx = canvas.getContext("2d")
//     if (!ctx) return

//     let animationFrameId: number

//     // Set canvas dimensions
//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth
//       canvas.height = window.innerHeight
//     }

//     resizeCanvas()
//     window.addEventListener("resize", resizeCanvas)

//     // Particle class
//     class Particle {
//       x: number
//       y: number
//       size: number
//       speedX: number
//       speedY: number
//       color: string
//       opacity: number

//       constructor() {
//         this.x = Math.random() * canvas.width
//         this.y = Math.random() * canvas.height
//         this.size = Math.random() * 3 + 1
//         this.speedX = (Math.random() - 0.5) * 0.5
//         this.speedY = (Math.random() - 0.5) * 0.5
//         this.color = this.getRandomColor()
//         this.opacity = Math.random() * 0.5 + 0.2
//       }

//       getRandomColor(): string {
//         const colors = [
//           "rgba(34, 211, 238, ", // cyan-400
//           "rgba(168, 85, 247, ", // purple-500
//           "rgba(59, 130, 246, ", // blue-500
//           "rgba(236, 72, 153, ", // pink-500
//         ]
//         return colors[Math.floor(Math.random() * colors.length)]
//       }

//       update() {
//         this.x += this.speedX
//         this.y += this.speedY

//         if (this.x > canvas.width) this.x = 0
//         else if (this.x < 0) this.x = canvas.width

//         if (this.y > canvas.height) this.y = 0
//         else if (this.y < 0) this.y = canvas.height

//         // Subtle opacity animation
//         this.opacity += (Math.random() - 0.5) * 0.01
//         this.opacity = Math.max(0.1, Math.min(0.6, this.opacity))
//       }

//       draw() {
//         if (!ctx) return
//         ctx.beginPath()
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
//         ctx.fillStyle = this.color + this.opacity + ")"
//         ctx.fill()

//         // Add glow effect
//         ctx.shadowColor = this.color + "0.5)"
//         ctx.shadowBlur = 10
//         ctx.fill()
//         ctx.shadowBlur = 0
//       }
//     }

//     // Create particles
//     const particleArray: Particle[] = []
//     const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000))

//     for (let i = 0; i < particleCount; i++) {
//       particleArray.push(new Particle())
//     }

//     // Animation function
//     function animate() {
//       if (!ctx) return

//       // Clear canvas with fade effect
//       ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
//       ctx.fillRect(0, 0, canvas.width, canvas.height)

//       // Update and draw particles
//       particleArray.forEach((particle) => {
//         particle.update()
//         particle.draw()
//       })

//       // Draw connections
//       connectParticles()

//       animationFrameId = requestAnimationFrame(animate)
//     }

//     // Connect nearby particles
//     function connectParticles() {
//       if (!ctx) return
//       const maxDistance = 120

//       for (let a = 0; a < particleArray.length; a++) {
//         for (let b = a + 1; b < particleArray.length; b++) {
//           const dx = particleArray[a].x - particleArray[b].x
//           const dy = particleArray[a].y - particleArray[b].y
//           const distance = Math.sqrt(dx * dx + dy * dy)

//           if (distance < maxDistance) {
//             const opacity = (1 - distance / maxDistance) * 0.3
//             ctx.strokeStyle = `rgba(34, 211, 238, ${opacity})`
//             ctx.lineWidth = 1
//             ctx.beginPath()
//             ctx.moveTo(particleArray[a].x, particleArray[a].y)
//             ctx.lineTo(particleArray[b].x, particleArray[b].y)
//             ctx.stroke()
//           }
//         }
//       }
//     }

//     // Start animation
//     animate()

//     // Cleanup
//     return () => {
//       window.removeEventListener("resize", resizeCanvas)
//       if (animationFrameId) {
//         cancelAnimationFrame(animationFrameId)
//       }
//     }
//   }, [])

//   return (
//     <canvas
//       ref={canvasRef}
//       className="fixed inset-0 -z-10 w-full h-full"
//       style={{
//         background: "linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #000000 100%)",
//       }}
//     />
//   )
// }
