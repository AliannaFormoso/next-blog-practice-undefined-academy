import styles from './Author.module.scss';
import Paragraph from "@/components/Paragraph/Paragraph";



const Author = ({name, avatarUrl="https://i.pravatar.cc/300", avatarAlt="Author Avatar" }) => {
  return (
    <div className={styles.author}>
      <img src={avatarUrl} alt={avatarAlt} />
      <Paragraph size="xs" weight="bold">{name}</Paragraph>
    </div>
  )
}

export default Author