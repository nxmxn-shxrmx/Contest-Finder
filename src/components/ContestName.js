import Styles from './Site.module.css'

const ContestName = (prop) =>
{
    return (<a href={prop.url} target="_blank">{prop.name}</a>)
}
export default ContestName