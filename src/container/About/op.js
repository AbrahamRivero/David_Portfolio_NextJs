{
	abouts.map((about, index) => (
		<motion.div
			whileInView={{ opacity: 1 }}
			whileHover={{ scale: 1.1 }}
			transition={{ duration: 0.5, type: 'tween' }}
			className={styles.app__profile_item}
			key={about.title + index}
		>
			<img src={urlFor(about.imgUrl)} alt={about.title} />
			<h2 className="bold-text" style={{ marginTop: 20 }}>
				{about.title}
			</h2>
			<p className="p-text" style={{ marginTop: 10 }}>
				{about.description}
			</p>
		</motion.div>
	))
}
