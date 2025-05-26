document.addEventListener("DOMContentLoaded", () => {
  const term = document.getElementById("term");
  const input = document.getElementById("cmd");

  const responses = {
    help: `Komutlar:
  scan        - Ağ taraması yap
  connect IP  - IP adresine bağlan
  clear       - Terminali temizle
  about       - Sistem bilgisi`,
    scan: generateFakeScan(),
    about: "HACKSIM OS v1.0 | Geliştirici: Kağan | Ağ modülü aktif.",
  };

  function generateFakeScan() {
    let output = "Ağ taraması başlatıldı...\nAktif cihazlar:\n";
    for (let i = 2; i < 6; i++) {
      const ip = `192.168.1.${Math.floor(Math.random() * 200) + 10}`;
      const device = ["Router", "Printer", "Camera", "Server"][i - 2];
      output += `- ${device} @ ${ip}\n`;
    }
    return output;
  }

  function handleConnect(command) {
    const ip = command.split(" ")[1];
    if (!ip) return "Bağlanılacak IP adresini belirtin.";
    return `Bağlantı ${ip} adresine gönderildi...\nYanıt bekleniyor...\nErişim reddedildi.`;
  }

  function writeOutput(command, output) {
    term.textContent += `\nroot@hacksim:~$ ${command}\n${output}`;
    term.scrollTop = term.scrollHeight;
  }

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const cmd = input.value.trim();
      input.value = "";

      if (cmd === "clear") {
        term.textContent = "root@hacksim:~$ ";
        return;
      }

      if (cmd.startsWith("connect ")) {
        writeOutput(cmd, handleConnect(cmd));
        return;
      }

      const response = responses[cmd] || `Komut bulunamadı: ${cmd}`;
      writeOutput(cmd, response);
    }
  });
});
