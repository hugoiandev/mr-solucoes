import { Container, Stack, Row, Col, Image } from "react-bootstrap";
import Footer from "../../components/footer";
import Header from "../../components/header";
import styles from "./home.module.css";
import Icon1 from "../../assets/illustrations/time.svg";
import Icon2 from "../../assets/illustrations/money.svg";
import CarteiraIcon from "../../assets/icons/carteira.svg";
import GraphIcon from "../../assets/icons/graph.svg";
import LupaIcon from "../../assets/icons/lupa.svg";
import MaosIcon from "../../assets/icons/maos.svg";
import PagamentoIcon from "../../assets/icons/pagamentos.svg";
import PhoneIcon from "../../assets/icons/phone.svg";
import HouseIcon from "../../assets/icons/house.svg";
import CardIcon from "../../assets/icons/card.svg";
import SchoolIcon from "../../assets/icons/school.svg";
import HeartIcon from "../../assets/icons/heart.svg";
import ExclamationIcon from "../../assets/icons/exclamation.svg";
import bgMan from "../../assets/imgs/bg-man.png";
import Button from "../../components/button";

const Home = (): JSX.Element => {
  return (
    <div className="position-relative">
      <Header />
      <section className={styles.intro}>
        <Container fluid="md">
          <Stack className="position-relative">
            <div className={styles.titleBox}>
              <h1 className={styles.title}>
                Crédito através da antecipação do seu FGTS
              </h1>
              <span className={styles.subtitle}>
                Você sabia que pode antecipar até 10 anos do seu Saque
                Aniversário FGTS?
              </span>
            </div>
            <div className={styles.simulation}>
              <span className={styles.simulationTitle}>Simule agora mesmo</span>
              <span className={styles.simulationSubtitle}>
                Informe seu saldo FGTS:
              </span>
              <div className={styles.simulationInputBox}>
                <input
                  type="text"
                  placeholder="Ex: 2.000,00"
                  className={styles.simulationInput}
                />
                <button className={styles.simulationInputButton}>
                  SIMULE JÁ
                </button>
              </div>
            </div>
          </Stack>
          <Row className={`${styles.illustration} flex-wrap flex-md-nowrap`}>
            <Col md={6} sm={12} className={`${styles.illustrationBox}`}>
              <div className="d-flex align-items-center">
                <div className={styles.illustrationText}>
                  <span className={styles.illustrationSpanTitle}>24 Horas</span>
                  <span className={styles.illustrationSpanSubtitle}>
                    Para ter o dinheiro liberado
                  </span>
                </div>
                <div className={styles.iconBox}>
                  <Image src={Icon1} width="100%" />
                </div>
              </div>
            </Col>
            <Col md={6} sm={12} className={`${styles.illustrationBox}`}>
              <div className="d-flex align-items-center">
                <div className={styles.illustrationText}>
                  <span className={styles.illustrationSpanTitle}>100%</span>
                  <span className={styles.illustrationSpanSubtitle}>
                    De aprovação para negativados
                  </span>
                </div>
                <div className={styles.iconBox}>
                  <Image src={Icon2} width="100%" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles.advantages}>
        <Container fluid="md">
          <div className="d-flex justify-content-center">
            <div className="d-flex flex-column align-items-center text-center">
              <h2 className={styles.advantagesTitle}>
                Vantagens
                <span className={styles.advantagesTitleSpan}> exclusivas</span>
              </h2>
              <p className={styles.advantagesText}>
                Todas essas vantagens você só tem com a MR Soluções Financeiras
              </p>
            </div>
          </div>
          <div className={styles.advantageContent}>
            <Row className="gap-3 flex-wrap flex-md-nowrap mb-3">
              <Col md={4} className={styles.advantageIconBox}>
                <div className="d-flex flex-column align-items-center p-3">
                  <Image src={LupaIcon} width={70} />
                  <span className={styles.advantageIconSpan}>Crédito</span>
                  <p className={styles.advantageIconParagraph}>
                    Sem consulta ao SPC e SERASA
                  </p>
                </div>
              </Col>
              <Col md={4} className={styles.advantageIconBox}>
                <div className="d-flex flex-column align-items-center p-3">
                  <Image src={GraphIcon} width={70} />
                  <span className={styles.advantageIconSpan}>Juros</span>
                  <p className={styles.advantageIconParagraph}>
                    Taxas de juros competitivas
                  </p>
                </div>
              </Col>
              <Col md={4} className={styles.advantageIconBox}>
                <div className="d-flex flex-column align-items-center p-3">
                  <Image src={CarteiraIcon} width={70} />
                  <span className={styles.advantageIconSpan}>Orçamento</span>
                  <p className={styles.advantageIconParagraph}>
                    Não compromete o orçamento mensal
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="gap-3 flex-wrap flex-md-nowrap">
              <Col md={4} className={styles.advantageIconBox}>
                <div className="d-flex flex-column align-items-center p-3">
                  <Image src={PhoneIcon} width={70} />
                  <span className={styles.advantageIconSpan}>Praticidade</span>
                  <p className={styles.advantageIconParagraph}>
                    Aquisição do empréstimo feita 100% pelo celular.
                  </p>
                </div>
              </Col>
              <Col md={4} className={styles.advantageIconBox}>
                <div className="d-flex flex-column align-items-center p-3">
                  <Image src={PagamentoIcon} width={70} />
                  <span className={styles.advantageIconSpan}>Parcelas</span>
                  <p className={styles.advantageIconParagraph}>
                    Até dez parcelas anuais do saque aniversário
                  </p>
                </div>
              </Col>
              <Col md={4} className={styles.advantageIconBox}>
                <div className="d-flex flex-column align-items-center p-3">
                  <Image src={MaosIcon} width={70} />
                  <span className={styles.advantageIconSpan}>Pagamento</span>
                  <p className={styles.advantageIconParagraph}>
                    Anual e mediante o débito direto na(s) conta(s) do FGTS
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section className={styles.requirements}>
        <Container fluid="md">
          <div className="d-flex justify-content-end">
            <div>
              <h2 className={styles.requirementsTitle}>
                Como obter
                <span className={styles.requirementsTitleSpan}>
                  {" "}
                  meu saldo?
                </span>
              </h2>
              <div className="mt-5 d-flex flex-column align-items-center">
                <div>
                  <Row className={styles.requirementRow}>
                    <Col className={styles.requirementItem}>
                      <span className={styles.requirementNumber}>1</span>
                      <p className={styles.requirementParagraph}>
                        Ter mais de 18 anos ou ser emancipado;
                      </p>
                    </Col>
                    <Col className={styles.requirementItem}>
                      <span className={styles.requirementNumber}>2</span>
                      <p className={styles.requirementParagraph}>
                        Ter CPF em situação regular na receita;
                      </p>
                    </Col>
                  </Row>
                  <Row className={styles.requirementRow}>
                    <Col className={styles.requirementItem}>
                      <span className={styles.requirementNumber}>3</span>
                      <p className={styles.requirementParagraph}>
                        Ter conta-corrente ou poupança;
                      </p>
                    </Col>
                    <Col className={styles.requirementItem}>
                      <span className={styles.requirementNumber}>4</span>
                      <p className={styles.requirementParagraph}>
                        Ser optante do saque aniversário;
                      </p>
                    </Col>
                  </Row>
                  <Row className={styles.requirementRow}>
                    <Col className={styles.requirementItem}>
                      <span className={styles.requirementNumber}>5</span>
                      <p className={styles.requirementParagraph}>
                        Autorizar a consulta do seu saldo FGTS;
                      </p>
                    </Col>
                    <Col className={styles.requirementItem}>
                      <span className={styles.requirementNumber}>6</span>
                      <p className={styles.requirementParagraph}>
                        Assinatura digital e aprovação do pagamento em sua conta
                        bancária.
                      </p>
                    </Col>
                  </Row>
                </div>
                <div className="mt-4">
                  <Button text="QUERO ANTECIPAR" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className={styles.beneficts}>
        <Container fluid="md">
          <Row className="align-items-center justify-content-center">
            <Col md={6} sm={12}>
              <div className="d-flex justify-content-center">
                <div className={styles.bgManBox}>
                  <Image src={bgMan} className="w-100" />
                </div>
              </div>
            </Col>
            <Col md={6} sm={12}>
              <Stack>
                <div className="mb-4">
                  <h2 className={styles.benefictsTitle}>
                    O
                    <span className={styles.benefictsTitleSpan}>
                      {" "}
                      FGTS é um dinheiro que já é seu,{" "}
                    </span>
                    com ele você pode fazer o que quiser!
                  </h2>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div className={styles.benefictsIconBox}>
                    <Image src={HouseIcon} className="w-100" />
                  </div>
                  <span className={styles.benefictsList}>
                    <span className="fw-bold">Reforme sua casa </span>ou renove
                    a decoração
                  </span>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div className={styles.benefictsIconBox}>
                    <Image src={CardIcon} className="w-100" />
                  </div>
                  <span className={styles.benefictsList}>
                    <span className="fw-bold">Pague suas dívidas </span>e fique
                    tranquilo
                  </span>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div className={styles.benefictsIconBox}>
                    <Image src={SchoolIcon} className="w-100" />
                  </div>
                  <span className={styles.benefictsList}>
                    <span className="fw-bold">Invista nos estudos</span>de
                    alguém da sua família
                  </span>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div className={styles.benefictsIconBox}>
                    <Image src={HeartIcon} className="w-100" />
                  </div>
                  <span className={styles.benefictsList}>
                    <span className="fw-bold">Valorize sua saúde </span>e de
                    quem você ama
                  </span>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div className={styles.benefictsIconBox}>
                    <Image src={ExclamationIcon} className="w-100" />
                  </div>
                  <span className={styles.benefictsList}>
                    <span className="fw-bold">Não seja pego de surpresa </span>
                    por emergências familiares
                  </span>
                </div>
                <div className={`mt-4 ${styles.benefictsButtonBox}`}>
                  <Button text="QUERO ANTECIPAR" />
                </div>
              </Stack>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
