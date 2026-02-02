import { Link } from 'react-router-dom'
import { Card, CardIcon, CardContent, CardTitle, CardDescription } from './HelpSectionCard.styled'

export default function HelpSectionCard({ icon, title, description, link }) {
  const content = (
    <>
      <CardIcon aria-hidden>{icon}</CardIcon>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </>
  )

  if (link) {
    return (
      <Card as={Link} to={link}>
        {content}
      </Card>
    )
  }

  return <Card as="div">{content}</Card>
}
