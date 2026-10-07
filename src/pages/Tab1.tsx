
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonAvatar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
} from '@ionic/react';

import {
  personOutline,
  schoolOutline,
  briefcaseOutline,
  ribbonOutline,
  codeSlashOutline,
} from 'ionicons/icons';

import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>

      {/* Cabeçalho */}
      <IonHeader>
        <IonToolbar>
          <IonTitle>Apresentação</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Apresentação</IonTitle>
          </IonToolbar>
        </IonHeader>

        {/* Perfil */}
        <div className="perfil-container">

          <IonAvatar className="foto-perfil">
            <img
              alt="Foto de Rafael Rodrigo"
              src="/foto-perfil.jpg"
            />
          </IonAvatar>

          <h1>Rafael Rodrigo</h1>

          <p className="cargo">
            Analista de Suporte Técnico
          </p>

          <p className="localizacao">
            Recife - PE
          </p>

        </div>

        {/* Sobre */}
        <IonCard className="card-home">

          <IonCardHeader>

            <div className="titulo-card">
              <IonIcon icon={personOutline} />
              <IonCardTitle>Sobre mim</IonCardTitle>
            </div>

          </IonCardHeader>

          <IonCardContent>

            <p>
              Profissional com mais de 7 anos de experiência na área
              de tecnologia, atuando como Analista de Suporte Técnico.
            </p>

            <p>
              Experiência na resolução de problemas técnicos,
              manutenção preventiva e corretiva, diagnóstico e
              instalação de sistemas, além da criação de bases de
              conhecimento para soluções recorrentes.
            </p>

            <p>
              Experiência em gestão de chamados, elaboração de
              documentação técnica e implementação de melhorias
              em sistemas e processos, com foco em eficiência
              operacional e satisfação do usuário.
            </p>

          </IonCardContent>

        </IonCard>

        {/* Formação */}
        <IonCard className="card-home">

          <IonCardHeader>

            <div className="titulo-card">
              <IonIcon icon={schoolOutline} />
              <IonCardTitle>Formação</IonCardTitle>
            </div>

          </IonCardHeader>

          <IonCardContent>

            <p>
              <strong>Graduação:</strong> Redes de Computadores
            </p>

            <p>
              <strong>Graduação:</strong> Gestão da Informação
            </p>

            <p>
              <strong>Pós-graduação:</strong> Gestão da Qualidade,
              Auditoria e Certificação
            </p>

          </IonCardContent>

        </IonCard>

        {/* Experiência */}
        <IonCard className="card-home">

          <IonCardHeader>

            <div className="titulo-card">
              <IonIcon icon={briefcaseOutline} />
              <IonCardTitle>Experiência</IonCardTitle>
            </div>

          </IonCardHeader>

          <IonCardContent>

            <p>
              <strong>Analista de Suporte Técnico</strong>
            </p>

            <p>
              Fundação Altino Ventura
            </p>

            <p>
              Gestão de chamados, suporte técnico especializado,
              manutenção de equipamentos, análise de problemas
              e implementação de melhorias em processos.
            </p>

          </IonCardContent>

        </IonCard>

        {/* Certificações */}
        <IonCard className="card-home">

          <IonCardHeader>

            <div className="titulo-card">
              <IonIcon icon={ribbonOutline} />
              <IonCardTitle>Certificações</IonCardTitle>
            </div>

          </IonCardHeader>

          <IonCardContent>

            <ul>
              <li>Projetos de Redes de Computadores</li>
              <li>Segurança e Regulação em Redes</li>
              <li>Configuração de Redes Complexas</li>
            </ul>

          </IonCardContent>

        </IonCard>

        {/* Habilidades */}
        <IonCard className="card-home">

          <IonCardHeader>

            <div className="titulo-card">
              <IonIcon icon={codeSlashOutline} />
              <IonCardTitle>Habilidades</IonCardTitle>
            </div>

          </IonCardHeader>

          <IonCardContent>

            <div className="habilidades">

              <span>Análise de dados</span>
              <span>Suporte técnico</span>
              <span>Gestão de SLAs</span>
              <span>Redes</span>
              <span>Documentação técnica</span>
              <span>Gestão de chamados</span>
              <span>Segurança de redes</span>
              <span>Melhoria de processos</span>

            </div>

          </IonCardContent>

        </IonCard>

      </IonContent>

    </IonPage>
  );
};

export default Tab1;
