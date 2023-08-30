import styles from "./MyForm.module.css"

const MyForm = () => {
  return (
    <div>
        {/* 1 - Criacao em Form*/}
        <form>
            <div>
                <label htmlFor="name">Nome: </label>
                <input type="text" name="name" placeholder="Digite seu nome"/>
            </div>
            {/* 2 - label envolvendo input*/}
            <label>
                <span>E-mail</span>
                <input type="email" name="email" placeholder="Digite o seu e-mail" />
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm