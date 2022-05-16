/* eslint-disable comma-dangle */
/* eslint-disable semi */
import { useState } from 'react'
import withHoc from '../../../../hocs/withHoc'
import HamburguerMenu from './HamburguerMenu'

const withContainer = withHoc(() => {
  const [toggle, setToggle] = useState(false)

  return {
    toggle,
    setToggle
  }
})

export default withContainer(HamburguerMenu)
