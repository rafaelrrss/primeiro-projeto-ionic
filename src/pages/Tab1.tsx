
import {
  IonContent,
  IonAvatar,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle
} from '@ionic/react';

import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Apresentação</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

        <IonHeader className="cabecalho" collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Apresentação</IonTitle>
          </IonToolbar>
        </IonHeader>

        {/* Foto do lado direito */}
        <div className="foto-container">
          <IonAvatar>
            <img
              alt="Minha foto"
              src="/foto-perfil.jpg"
            />
          </IonAvatar>
        </div>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Rafael Rodrigo</IonCardTitle>

            <IonCardSubtitle>
              Sobre
            </IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            Profissional com mais de 7 anos de experiência na área de tecnologia, atuando na Fundação Altino Ventura como Analista de Suporte Técnico. Especialista na resolução de problemas técnicos, manutenção preventiva e corretiva, diagnóstico e instalação de sistemas, além de criação de bases de conhecimento para soluções recorrentes.

Experiência em gestão de chamados, elaboração de documentação técnica e implementação de melhorias em sistemas e processos, com foco em eficiência operacional e na satisfação do usuário.

Formação em Redes de Computadores e Gestão da Informação, com pós-graduação em Gestão da Qualidade, Auditoria e Certificação. Certificações em Projetos de Redes de Computadores, Segurança e Regulação em Redes e Configuração de Redes Complexas.

Habilidades em análise de dados, gestão de SLAs e suporte técnico especializado, buscando sempre inovar e otimizar processos tecnológicos.
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;

