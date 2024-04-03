import { Link, LinkProps } from "react-router-dom"
import { FC } from "react"
import cls from "classnames"

import styles from './applink.module.scss'

enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps{
  theme: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {

  const {children, className, to, theme = AppLinkTheme.PRIMARY, ...otherprops} = props

  return (
    <Link 
      to={to} 
      className={cls(className, styles.link)}
      {...otherprops}
    >
      {children}
    </Link>
  )
}