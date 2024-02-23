import styles from './DefaultComponent.module.css'
const DefaultComponent = ({ name }: { name: string }) => {
  return (
    <div>
      <h1>Hello my dear <div className={styles.nameLabel}>{name}</div></h1>
    </div>
  )
}

export default DefaultComponent
