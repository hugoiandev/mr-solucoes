import { Container, Stack, Row, Col, Image, Accordion } from "react-bootstrap";
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
import QuoteIcon from "../../assets/icons/quote.svg";
import bgMan from "../../assets/imgs/bg-man.png";
import bgMan2 from "../../assets/imgs/bg-man2.png";
import CallIcon from "../../assets/icons/call.svg";
import MailIcon from "../../assets/icons/mail.svg";
import ScheduleIcon from "../../assets/icons/schedule.svg";
import FacebookIcon from "../../assets/icons/facebook.svg";
import InstagramIcon from "../../assets/icons/instagram.svg";
import Button from "../../components/button";
import Star from "../../components/star";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Home = (): JSX.Element => {
  return (
    <>
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
      <section className={styles.faq}>
        <Container fluid="md">
          <div className="d-flex justify-content-center">
            <div>
              <h3 className={styles.faqTitle}>FAQ</h3>
              <h2 className={styles.faqSubtitle}>Perguntas Frequentes</h2>
            </div>
          </div>
          <div className="mt-5">
            <Row>
              <Col>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className={styles.accordionHeader}>
                      1. O que é o Empréstimo com antecipação do FGTS?
                    </Accordion.Header>
                    <Accordion.Body className={styles.accordionText}>
                      É um empréstimo que utiliza o saldo do FGTS como garantia.
                      Na prática é uma antecipação de parte do valor que você
                      possui em sua conta de FGTS através de uma modalidade
                      chamada Saque-Aniversário. Permite a antecipação do valor
                      de até 10 (dez) parcelas de Saque Aniversário e o
                      percentual da antecipação irá depender do valor de saldo
                      do seu FGTS. Para ter direito ao empréstimo é necessário
                      habilitar o Saque Aniversário através do APP FGTS, no site
                      fgts.caixa.gov.br.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header className={styles.accordionHeader}>
                      2. Quem pode contratar?
                    </Accordion.Header>
                    <Accordion.Body className={styles.accordionText}>
                      Todo brasileiro que tiver saldo no FGTS, independente se
                      tiver empregado ou desempregado, e também é disponível
                      para negativados! Basta ter o Saque Aniversário
                      habilitado.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header className={styles.accordionHeader}>
                      3. Qual a taxa de juros da operação?
                    </Accordion.Header>
                    <Accordion.Body className={styles.accordionText}>
                      A taxa de juros máxima de 2,04% ao mês, podendo ser menos.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header className={styles.accordionHeader}>
                      4. A operação exige algum tipo de avaliação de crédito?
                    </Accordion.Header>
                    <Accordion.Body className={styles.accordionText}>
                      Não. É 100% de aprovação para quem possui saldo mínimo de
                      R$ 2.000,00 no FGTS.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header className={styles.accordionHeader}>
                      5. Tenho que ter conta em qual banco para receber?
                    </Accordion.Header>
                    <Accordion.Body className={styles.accordionText}>
                      O crédito pode ser disponibilizado em qualquer conta e
                      banco, exceto em contas digitais e contas-salário. No
                      momento em que você fizer sua simulação do empréstimo
                      junto a nossos consultores você irá informar a conta que
                      deseja receber o dinheiro.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header className={styles.accordionHeader}>
                      6. Como é feito o pagamento das parcelas?
                    </Accordion.Header>
                    <Accordion.Body className={styles.accordionText}>
                      Você não recebe nenhum boleto para pagar, pois os juros
                      cobrados serão descontados diretamente do seu saldo do
                      FGTS, desta forma não há pagamento de parcelas mensais, o
                      que não compromete em nada sua renda.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="6">
                    <Accordion.Header className={styles.accordionHeader}>
                      7. Se for demitido, perco o direito do resgate?
                    </Accordion.Header>
                    <Accordion.Body className={styles.accordionText}>
                      Pelo período de 2 anos a partir da habilitação do saque
                      aniversário seu saldo do FGTS fica congelado. Mas é
                      possível utilizar o saldo na modalidade de empréstimo com
                      a antecipação do FGTS. Após 2 anos é permitido optar pelo
                      retorno do saque-rescisão.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="7">
                    <Accordion.Header className={styles.accordionHeader}>
                      8. Consigo antecipar todo o meu saldo do FGTS?
                    </Accordion.Header>
                    <Accordion.Body className={styles.accordionText}>
                      Não, somente parte do seu saldo. Para saber o valor exato
                      que você pode receber você precisa entrar em contato com a
                      MR SOLUÇÕES FINANCEIRAS e conversar com nosso time de
                      especialistas que irão tirar todas as suas dúvidas.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <Button text="QUERO ANTECIPAR" />
          </div>
        </Container>
      </section>
      <section className={styles.testimonials}>
        <Container fluid="md">
          <div className="d-flex justify-content-center mb-5">
            <h2 className={styles.testimonialsTitle}>
              Veja quem já confiou na{" "}
              <span className={styles.testimonialsTitleSpan}>
                MR SOLUÇÕES FINANCEIRAS
              </span>
            </h2>
          </div>
          <Swiper
            direction="horizontal"
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={true}
            className={styles.carouselCustomClass}
          >
            <SwiperSlide>
              <div className={styles.carouselItem}>
                <div>
                  <Image width={100} src={QuoteIcon} />
                </div>
                <div>
                  <p className={styles.carouselParagraph}>
                    “Empresa muito séria e comprometida, atendimento ágil e
                    excelente! Recomendo muito.”
                  </p>
                  <span className={styles.carouselName}>Bruna Letícia</span>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className={styles.carouselDate}>02/2022</span>
                    <span>
                      <Star />
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.carouselItem}>
                <div>
                  <Image width={100} src={QuoteIcon} />
                </div>
                <div>
                  <p className={styles.carouselParagraph}>
                    “Empresa muito séria e comprometida, atendimento ágil e
                    excelente! Recomendo muito.”
                  </p>
                  <span className={styles.carouselName}>Bruna Letícia</span>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className={styles.carouselDate}>02/2022</span>
                    <span>
                      <Star />
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.carouselItem}>
                <div>
                  <Image width={100} src={QuoteIcon} />
                </div>
                <div>
                  <p className={styles.carouselParagraph}>
                    “Empresa muito séria e comprometida, atendimento ágil e
                    excelente! Recomendo muito.”
                  </p>
                  <span className={styles.carouselName}>Bruna Letícia</span>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className={styles.carouselDate}>02/2022</span>
                    <span>
                      <Star />
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.carouselItem}>
                <div>
                  <Image width={100} src={QuoteIcon} />
                </div>
                <div>
                  <p className={styles.carouselParagraph}>
                    “Empresa muito séria e comprometida, atendimento ágil e
                    excelente! Recomendo muito.”
                  </p>
                  <span className={styles.carouselName}>Bruna Letícia</span>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className={styles.carouselDate}>02/2022</span>
                    <span>
                      <Star />
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </Container>
      </section>
      <section className={styles.contact}>
        <Container fluid="md">
          <div>
            <Row>
              <Col md={6}>
                <div>
                  <div className="mb-3">
                    <span className={styles.contactTitle}>
                      Quer conversar com o time?
                    </span>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <Image width={30} src={CallIcon} className="me-3" />
                    <span className={styles.contactSpan}>
                      Ligue: (19) 98607-3582
                    </span>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <Image width={30} src={MailIcon} className="me-3" />
                    <span className={styles.contactSpan}>
                      atendimento@libereseufgts.com.br
                    </span>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <Image width={30} src={ScheduleIcon} className="me-3" />
                    <span className={styles.contactSpan}>
                      Atendimento: Segunda a Sexta - 9h às 18h
                    </span>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div>
                  <div className="mb-3">
                    <span className={styles.contactTitle}>
                      Siga nossas redes sociais:
                    </span>
                  </div>
                  <div className="d-flex gap-3">
                    <div className={styles.socialMediaBox}>
                      <Image width={25} src={FacebookIcon} />
                    </div>
                    <div className={styles.socialMediaBox}>
                      <Image width={25} src={InstagramIcon} />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className={styles.separatorBox}>
            <div className={styles.separator}></div>
          </div>
          <div>
            <div>
              <p className={styles.termsText}>
                Crédito sujeito a saldo FGTS disponível. A GH Promotora é a
                marca de uso da empresa inscrita no CNPJ 48.716.991/0001-30.
                Atuamos como correspondente bancário, atividade regulada pelo
                Banco Central do Brasil, nos termos da Resolução nº 3.954, de 24
                de fevereiro de 2011. Toda avaliação de crédito será realizada
                conforme a política de crédito da Instituição Financeira
                escolhida pelo usuário. Antes da contratação de qualquer serviço
                através de nossos parceiros, você receberá todas as condições e
                informações relativas ao produto a ser contratado, de forma
                completa e transparente.
                <br />
                <br />A Antecipação do Saque Aniversário do FGTS trata-se de um
                empréstimo para antecipar o valor do saque anual utilizando o
                saldo do FGTS como garantia, sujeita aos seguintes encargos de
                até: 1,99% juros a.m e 27,09% a.a, CET 2,10% a.m e 28,8% a.a,
                IOF 1,73% a.m. e 22,85% a.a. As parcelas antecipadas serão pagas
                anualmente, no mês em que seria efetuado o saque aniversário.
                Para contratá-lo, é necessário que você tenha aderido à
                modalidade Saque Aniversário do FGTS. Utilize seu crédito de
                forma consciente e somente em caso de necessidade. Condições
                sujeitas a alterações, sem aviso prévio.
              </p>
              <p className={styles.termsAdvertimentText}>
                Atenção: A GH Promotora é uma plataforma digital que atua como
                correspondente bancário para facilitar o processo de contratação
                de empréstimos. NÃO exigimos depósitos ou cobramos taxas
                antecipadas na realização de qualquer operação.
              </p>
            </div>
          </div>
          <div>
            <Row className="align-items-center">
              <Col>
                <div className={styles.lastRowimgManBox}>
                  <Image className="w-100" src={bgMan2} />
                </div>
              </Col>
              <Col>
                <div>
                  <span className={styles.lastRowTitle}>
                    Ops... então você é do tipo desconfiado?
                  </span>
                  <p className={styles.lastRowParagraph}>
                    Pode confiar, nossa equipe foi treinada pra te ajudar e não
                    só para vender.
                  </p>
                  <div className="mt-4">
                    <Button text="QUERO ANTECIPAR" />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Home;
