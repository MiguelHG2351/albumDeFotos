import { Creator } from './styles/videos'

export default function Videos() {
    return <section className="container-global">
        <h2>Creado por: <b>Walter Noel Solorzano Gaitán</b></h2>
        <Creator>
            <iframe title="Video de youtube donde aparece la familia" width="560" height="315" src="https://www.youtube.com/embed/jKNMNtW8Sow" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Creator>
        <h2>Creado por: <b>Salvador de Jesús Acevedo Gaitán</b></h2>
        <Creator>
            <iframe title="Video de youtube donde aparece la abuela cantando" width="560" height="315" src="https://www.youtube.com/embed/kJN49Gy3218" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/gGuef3D6hJo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/g_S_W15n3xI?start=4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Creator>
</section>
}