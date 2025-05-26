// terminal.js
document.addEventListener("DOMContentLoaded", () => {
  const term = document.getElementById("term");
  const input = document.getElementById("cmd");

  const responses = {
    help: `Kullanılabilir komutlar:
  help     - Bu mesajı gösterir
  hack     - Sahte hack işlemi başlatır
  clear    - Terminali temizler
  about    - HACKSIM OS hakkında bilgi`,
    hack: "Sunucuya bağlanılıyor...\nGüvenlik duvarı atlandı\nPayload enjekte edildi\n>> HACK BAŞARILI <<",
    about: "HACKSIM OS v1.0\nGeliştirici: Kağan\nSimülasyon amaçlı sahte terminal.",
  };

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

      const response = responses[cmd] || `Komut bulunamadı: ${cmd}`;
      writeOutput(cmd, response);
    }
  });
});
