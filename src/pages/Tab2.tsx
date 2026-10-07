
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
} from '@ionic/react';

import {
  callOutline,
  mailOutline,
  logoInstagram,
  locationOutline,
  businessOutline,
  briefcaseOutline,
} from 'ionicons/icons';

import './Tab2.css';

const contatos = [
  {
    nome: 'Rafael Rodrigo',
    telefone: '(81) 99999-9999',
    email: 'rafael@email.com',
    redeSocial: '@rafaelrodrigo',
    cidade: 'Recife - PE',
    empresa: 'Empresa ABC',
    profissao: 'Analista',
  },
];

const Tab2: React.FC = () => {
  return (
    <IonPage>

      {/* Cabeçalho */}
      <IonHeader>
        <IonToolbar>
          <IonTitle>Contatos</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

        {/* Cabeçalho para telas grandes */}
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Contatos</IonTitle>
          </IonToolbar>
        </IonHeader>

        {/* Lista de contatos */}
        <IonList>

          {contatos.map((contato, index) => (

            <IonItem key={index}>

              <IonLabel>

                {/* Nome */}
                <h2 className="nome-contato">
                  {contato.nome}
                </h2>

                {/* Telefone */}
                <p className="info-contato">
                  <IonIcon icon={callOutline} />
                  <strong>Telefone:</strong>
                  <span>{contato.telefone}</span>
                </p>

                {/* E-mail */}
                <p className="info-contato">
                  <IonIcon icon={mailOutline} />
                  <strong>E-mail:</strong>
                  <span>{contato.email}</span>
                </p>

                {/* Rede social */}
                <p className="info-contato">
                  <IonIcon icon={logoInstagram} />
                  <strong>Rede social:</strong>
                  <span>{contato.redeSocial}</span>
                </p>

                {/* Cidade */}
                <p className="info-contato">
                  <IonIcon icon={locationOutline} />
                  <strong>Cidade:</strong>
                  <span>{contato.cidade}</span>
                </p>

                {/* Empresa */}
                <p className="info-contato">
                  <IonIcon icon={businessOutline} />
                  <strong>Empresa:</strong>
                  <span>{contato.empresa}</span>
                </p>

                {/* Profissão */}
                <p className="info-contato">
                  <IonIcon icon={briefcaseOutline} />
                  <strong>Profissão:</strong>
                  <span>{contato.profissao}</span>
                </p>

                {/* Botões */}
                <div className="botoes-contato">

                  {/* Ligar */}
                  <IonButton
                    fill="clear"
                    href={`tel:${contato.telefone}`}
                    aria-label={`Ligar para ${contato.nome}`}
                  >
                    <IonIcon
                      slot="start"
                      icon={callOutline}
                    />
                    Ligar
                  </IonButton>

                  {/* E-mail */}
                  <IonButton
                    fill="clear"
                    href={`mailto:${contato.email}`}
                    aria-label={`Enviar e-mail para ${contato.nome}`}
                  >
                    <IonIcon
                      slot="start"
                      icon={mailOutline}
                    />
                    E-mail
                  </IonButton>

                  {/* Instagram */}
                  <IonButton
                    fill="clear"
                    href={`https://instagram.com/${contato.redeSocial.replace(
                      '@',
                      ''
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Abrir Instagram de ${contato.nome}`}
                  >
                    <IonIcon
                      slot="start"
                      icon={logoInstagram}
                    />
                    Instagram
                  </IonButton>

                </div>

              </IonLabel>

            </IonItem>

          ))}

        </IonList>

      </IonContent>

    </IonPage>
  );
};

export default Tab2;
