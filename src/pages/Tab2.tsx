
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
      <IonHeader>
        <IonToolbar>
          <IonTitle>Contatos</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Contatos</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          {contatos.map((contato, index) => (
            <IonItem key={index}>

              <IonLabel>
                <h2 className="nome-contato">{contato.nome}</h2>

                <p>
                  <strong>Telefone:</strong> {contato.telefone}
                </p>

                <p>
                  <strong>E-mail:</strong> {contato.email}
                </p>

                <p>
                  <strong>Rede social:</strong> {contato.redeSocial}
                </p>

                <p>
                  <strong>Cidade:</strong> {contato.cidade}
                </p>

                <p>
                  <strong>Empresa:</strong> {contato.empresa}
                </p>

                <p>
                  <strong>Profissão:</strong> {contato.profissao}
                </p>


              </IonLabel>

              {/* Botão para ligar */}
              <IonButton
                slot="end"
                fill="clear"
                href={`tel:${contato.telefone}`}
                aria-label={`Ligar para ${contato.nome}`}
              >
                <IonIcon icon={callOutline} />
              </IonButton>

              {/* Botão para enviar e-mail */}
              <IonButton
                slot="end"
                fill="clear"
                href={`mailto:${contato.email}`}
                aria-label={`Enviar e-mail para ${contato.nome}`}
              >
                <IonIcon icon={mailOutline} />
              </IonButton>

              {/* Botão da rede social */}
              <IonButton
                slot="end"
                fill="clear"
                href={`https://instagram.com/${contato.redeSocial.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir Instagram de ${contato.nome}`}
              >
                <IonIcon icon={logoInstagram} />
              </IonButton>

            </IonItem>
          ))}
        </IonList>

      </IonContent>
    </IonPage>
  );
};

export default Tab2;