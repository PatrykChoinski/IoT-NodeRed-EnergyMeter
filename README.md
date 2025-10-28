# IoT-NodeRed-EnergyMeter

## PLC

- **DIADesigner-AX** – [Pobierz z DIAStudio](https://diastudio.deltaww.com/home/downloads?sec=download)  
  Aby pobrać DIADesigner-AX, należy zarejestrować się na platformie DIAStudio.

---

## DPM

- **DPMSoft** – [Pobierz z Delta Download Center](https://downloadcenter.deltaww.com/en-US/DownloadCenter?CID=06&downloadID=DPM-D520I&itemID=060404&sort_dir=DESC&sort_expr=cdate&v=1)  
  DPMSoft to oprogramowanie do konfiguracji i monitorowania mierników energii Delta DPM.

---

## Node-RED

- **Node-RED** – [Pobierz Node-RED](https://nodered.org/docs/getting-started/)  
  Node-RED to narzędzie do programowania wizualnego, umożliwiające tworzenie aplikacji opartych na zdarzeniach, integrujące urządzenia, API i usługi online.

**Aktywacja projektów w Node-RED:**  
[https://nodered.org/docs/user-guide/projects](https://nodered.org/docs/user-guide/projects)

---

## OPC Watch

- **OPC Watch** – [Pobierz OPC Watch](https://docs.traeger.de/en/software/sdk/opc-ua/net#download)  
  OPC Watch to prosty klient OPC UA umożliwiający dostęp do serwerów OPC UA.

---

## VPN

- **OpenVPN Connect** – [Pobierz OpenVPN Connect](https://openvpn.net/client-connect-vpn-for-windows/)  
  OpenVPN Connect to oficjalny klient OpenVPN, umożliwiający bezpieczne połączenia VPN.

---

## Git

- **Git for Windows** – [Pobierz Git](https://git-scm.com/install/windows)

---

## Node-RED – Zależności

Aby uruchomić projekt, zainstaluj następujące paczki Node-RED:

1. Mapa świata  
   npm install node-red-contrib-web-worldmap  
   Dokumentacja: https://flows.nodered.org/node/node-red-contrib-web-worldmap

2. System alarmów  
   npm install node-red-contrib-alarm  
   Dokumentacja: https://flows.nodered.org/node/node-red-contrib-alarm

3. Integracja z OPC UA  
   npm install node-red-contrib-opcua  
   Dokumentacja: https://flows.nodered.org/node/node-red-contrib-opcua

4. Dashboard użytkownika  
   npm install node-red-dashboard  
   Dokumentacja: https://flows.nodered.org/node/node-red-dashboard

5. Integracja z GitHub  
   npm install --save node-red-contrib-github-plus  
   Dokumentacja: https://flows.nodered.org/node/node-red-contrib-github-plus

---

## Linki do buildów Node-RED

Node-RED (edytor):  
https://iot-nodered-energymeter-a0bgd5fhd3cwhsgj.polandcentral-01.azurewebsites.net/red

Interfejs użytkownika (UI):  
https://iot-nodered-energymeter-a0bgd5fhd3cwhsgj.polandcentral-01.azurewebsites.net/api/ui
