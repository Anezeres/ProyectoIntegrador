export default function Landing() {
	return (
		<div>
			<header>
				{/* Navbar */}
				<nav className="flex justify-between items-center">
					<ul className="flex space-x-4">
						<li className="text-white">
							<a className="btn btn-blue" href="/intro-0">
								Jugar
							</a>
						</li>
						<li>
							<a href="#contenido">Acerca de</a>
						</li>
					</ul>
					<div>
						<a href="/intro-0" className="ml-4 text-white">
							Log in
						</a>
					</div>
				</nav>
			</header>
			<section className="banner h-30 relative">
				<img
					src="/images/banner.png"
					alt="Banner"
					className="w-full h-full object-cover"
				/>
			</section>

			<div className="flex  flex-col items-center justify-between p-24 w-full  ">
				<section id="contenido" className="  p-8">
					<h1 className="text-4xl font-bold mb-4">La odisea de Xander</h1>
					<p className="text-lg text-white">
						En el año 2055, Xander Xavian se sumerge en un mundo donde la
						tecnología ha alcanzado su cúspide, controlando incluso la salud de
						los ciudadanos a través de dispositivos electrónicos precisos.
						Después de perder a sus padres en ataques cibernéticos, Xander vive
						con su amada abuela Evelyn, quien sacrifica sus ahorros para
						prolongar su vida mediante un dispositivo conectado a su corazón. La
						vida de Xander se ve amenazada cuando un hacker habilidoso logra
						obtener el código para apagar el corazón de Evelyn. Con una semana
						para reunir una cantidad exorbitante de dinero, Xander se ve
						atrapado en una carrera contra el tiempo para salvar la vida de su
						abuela. A medida que Xander se adentra en el oscuro mundo del
						hacking, descubre un legado dejado por su padre: un Nexo Digital
						capaz de transferir su conciencia al mundo virtual. Guiado por una
						emotiva carta de su padre, Xander se embarca en una búsqueda que no
						solo implica salvar a Evelyn, sino también descubrir la verdad
						detrás de los ataques cibernéticos. "Fragmentos Virtuales" es una
						novela visual que explora el amor, la tecnología avanzada y la lucha
						contra los límites de la realidad. Xander se enfrentará a dilemas
						morales, desafíos virtuales y descubrimientos impactantes mientras
						se sumerge en un mundo donde la línea entre lo real y lo virtual se
						desdibuja. La narrativa te invita a cuestionar la ética en un futuro
						tecnológicamente avanzado y a explorar los vínculos que trascienden
						las barreras de la vida y la muerte. ¿Podrá Xander superar sus
						miedos y salvar a su abuela, o sucumbirá al mismo destino que sus
						padres?
					</p>
				</section>
			</div>

			<footer id="footer">
				{/* Footer */}
				<p>
					Contactanos{" "}
					<a color="#0000FF" href="mailto:contact@aleatales.com">
						AleatalesInteractive@app.com
					</a>
				</p>
				<p>&copy; 2023 Aleatales Interactive. Todos los derechos reservados.</p>
			</footer>
		</div>
	);
}
