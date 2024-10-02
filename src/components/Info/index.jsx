import { PraticeChart } from "../Form/PraticeChart";
import * as Styled from "./styles";
import { DownSquareOutlined } from "@ant-design/icons";
export const Info = ({ topic, data, name }) => {
  const getTopicInfo = (topic) => {
    const topicsMap = {
      Todos: "Avaliação Geral dos resultados BTW Leves + Práticos",
      Postura:
        "O conceito de postura se refere à maneira como o(a) condutor(a) se posiciona no veículo em relação aos comandos ao dirigir, como utiliza as regulagens de assento/encosto e de volante. Uma postura correta ao volante incide diretamente no nível de qualidade, segurança, saúde e proporciona maior eficiência no uso dos comandos.",
      "Mecânica de Braços":
        "O conceito de mecânica de braços diz respeito à maneira como o(a) condutor(a) segura e manuseia o volante, a técnica correta influencia na eficiência do uso do comando e gera um controle maior do veículo, principalmente em manobras emergenciais que exigem maior dinâmica do seu uso.",
      "Uso dos Pedais e Alavanca de Câmbio": `O uso correto e técnico dos pedais (freio, acelerador e embreagem) e da alavanca de câmbio aumentam a eficiência com que se conduz o veículo e
        erros neste âmbito influenciam diretamente na segurança, no tempo de vida útil dos componentes mecânicos e no meio ambiente. O uso correto
        destes comandos deve considerar a coordenação, sensibilidade e o momento certo de utilizá-los.`,
      "Uso da Caixa de Câmbio/Transmissão": `A caixa de câmbio é o equipamento responsável pelas mudanças de marchas do veículo. Para um bom uso deste equipamento, primeiro é necessário compreender a função de cada uma das marchas e assim o momento certo de utilizá-las e depois realizar as mudanças com sensibilidade e coordenação com os outros comandos. O uso racional incide na segurança, no tempo de vida útil dos componentes mecânicos, na  economia de combustível e consequentemente na preservação do meio ambiente.`,
      Estacionamento: `A manobra de estacionamento inicia-se no momento em que o(a) condutor(a) decide onde estacionar e só é concluída no momento em que desliga o veículo devidamente estacionado. É fundamental sinalizar suas intenções, circular com baixa velocidade e procurar o melhor campo de visão, inclusive deixando de estacionar onde o(a) condutor(a) considerar que é inseguro ou muito complexo. Vale lembrar aqui que os acidentes ocorridos neste tipo de manobras são muito frequentes, podendo inclusive gerar lesões e até fatalidades.`,
      "Física Aplicada à Condução":
        "O conceito de Transferência de Peso é uma das mais relevantes contribuições da Física para a Condução Segura. Se trata basicamente de considerar e utilizar a seu favor o fato de que durante as manobras de aceleração/desaceleração e deslocamentos laterais, se produz um deslocamento do peso do veículo, determinando maior ou menor peso conforme a manobra realizada. O domínio deste conceito, na prática, garante a eficiência de uma manobra, por exemplo, ao esquivar-se de um obstáculo que surge inesperadamente à frente do veículo.",
      "Frenagem de Emergência":
        "A Frenagem de Emergência é utilizada quando todas as outras opções de manobra se tornam ineficazes diante de um imprevisto e o veículo necessita reduzir bruscamente sua velocidade para que não ocorra um acidente (choque, colisão, atropelamento). Elementos que influenciam no momento da frenagem: velocidade, sistema de freios (convencional e ABS), técnica de frenagem, carga, condições da via, clima e experiência/habilidade do condutor.",

      "Tempo de Reação":
        "Tempo de Reação é o intervalo de tempo entre o momento em que o (a) condutor (a) percebe o risco e o momento em que emite uma atitude para evitar o acidente, acionando o pedal de freio e/ou volante. O Tempo de Reação pode variar entre os condutores, mas em média dura 1 segundo. O tempo de 1 segundo pode não parecer muito tempo, porém em função da velocidade exercida pelo veículo, este intervalo de tempo pode não ser o suficiente para uma reação efetiva.",

      "Manobra em Espaço Reduzido":
        " A manobra em espaço reduzido é aquela realizada em estacionamentos de condomínios, shopping centers e garagens de hotéis, ou seja, locais que contam com um grande número de elementos (veículos, pedestres, pilastras, portões,...) que o(a) condutor(a) deve considerar para que não ocorra nenhum acidente, e com o agravante do espaço reduzido para estacionar. Lembrando que além dos custos, estes acidentes podem gerar lesões e até fatalidades",

      "Reação de Aceleração":
        "A Reação indevida de aceleração acontece no momento da manobra de esquiva e é nociva pelo fato de que aumenta a chance de o (a) condutor (a) perder o controle do veículo em um momento bastante crítico, onde o principal objetivo é sair da situação de emergência sem chocar-se contra os obstáculos. Existem forças atuando durante o deslocamento lateral do veículo que ficam acentuadas quando este acelera e assim podem gerar a perca de controle e possivelmente acidentes.",

      "Regulagem de Espelhos":
        "Os espelhos retrovisores (interno e externos) são dotados de vários níveis de regulagem, que se adequam às diferentes estaturas dos condutores e às manobras a serem realizadas. Uma correta regulagem destes, garante a eliminação de grande parte dos pontos cegos ao redor do veículo.",
      Velocidade: `A velocidade é um fator de extrema relevância na Segurança Viária, ela é um agente duplo: Contribui na ocorrência de acidentes e também agrava suas consequências. Temos dois tipos de velocidade, a Regulamentada e a Adequada. A primeira se refere à indicada pela Legislação de trânsito (placas), que não pode ser excedida em nenhuma circunstância e a segunda é aquela condicionada diante das situações encontradas durante a condução (chuva, condições da via, neblina, animais na pista), condições do motorista (física e mental), passageiros (crianças, idosos e gestantes), carga, tráfego intenso, desgaste dos pneus).`,
      "Esquiva de Emergência": `A esquiva realizada em situações de emergência é uma manobra que exige alto nível de técnica e de coordenação/sensibilidade no uso dos comandos, já que o(a) condutor(a) necessita controlar o veículo diante do imprevisto e desviar sem acertar os obstáculos. E para uma manobra eficiente tem de considerar e interagir com as forças atuantes sobre o veículo, pois do contrário estas podem gerar perda de controle e acidentes`,
    };

    return topicsMap[topic] || "Tópico desconhecido.";
  };

  const listPerson = data.filter(
    (item) => item.respostas_instrutor !== "Aprovado"
  );

  const sortedListPerson = listPerson.sort((a, b) => {
    const nameA = a.firstname.toLowerCase();
    const nameB = b.firstname.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });

  const handleClick = () => {
    window.scrollTo({
      top: window.scrollY + 400,
      behavior: "smooth",
    });
  };
  return (
    <Styled.Holder>
      <h1>{topic === "Todos" ? "GERAL" : topic.toUpperCase()}</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <PraticeChart data={data} topic={topic} />
        {!name && sortedListPerson.length > 0 && (
          <Styled.Navigate onClick={handleClick}>
            <DownSquareOutlined />
          </Styled.Navigate>
        )}
        <p>{getTopicInfo(topic)}</p>
      </div>
      {!name && sortedListPerson.length > 0 && (
        <div
          style={{
            height: "25rem",
            width: "100%",
            marginTop: "1rem",
          }}
        >
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th>Tópico</th>
                <th>Comentário do Instrutor</th>
              </tr>
            </thead>
            <tbody>
              {listPerson.map((item, index) => (
                <tr key={index}>
                  <td>{item.firstname}</td>
                  <td>{item.lastname}</td>
                  <td>{item.topicos}</td>
                  <td>{item.respostas_topicos}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Styled.Holder>
  );
};
