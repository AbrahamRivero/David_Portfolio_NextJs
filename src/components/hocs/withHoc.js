const withHoc = (hoc) => (Component) => function wrapped({ ...props }) {
	const hocProps = hoc(props)
	return <Component {...props} {...hocProps} />
}

export default withHoc