const FotosFlotantes = [
  "./FotosFlotantes/Foto1.jpg",
  "./FotosFlotantes/Foto2.jpg",
  "./FotosFlotantes/Foto3.jpg",
  "./FotosFlotantes/Foto4.jpg",
];

const FotosAlbum = [
  "./FotosAlbum/2bf4c225-897e-467a-b831-9be517b2dbfb.jpeg",
  "./FotosAlbum/2d1c9fae-f1ae-4d63-b297-416c54fc2f1e.jpeg",
  "./FotosAlbum/2ea665de-506f-4bca-8bab-1f93de1ecdc1.jpeg",
  "./FotosAlbum/4ef068f0-4ed9-478d-b1e5-620e50314f6d.jpeg",
  "./FotosAlbum/9a226045-a012-451e-9d68-b2ffbd7ffc72.jpeg",
  "./FotosAlbum/15dd1163-0a22-4e7d-ba43-637df4d5a4de.jpeg",
  "./FotosAlbum/29f392ee-9603-40f6-8d85-c0d2b60a6725.jpeg",
  "./FotosAlbum/31e39128-6e29-43c6-bfef-8468ec5a1cbe.jpeg",
  "./FotosAlbum/322763ed-0055-4573-980a-8c5c66320796.jpeg",
  "./FotosAlbum/aed73a01-5a2b-4da4-8ff1-d63e5d914443.jpeg",
  "./FotosAlbum/bd40b5a5-bd29-45a2-88d1-90c1f2e5bb98.jpeg",
  "./FotosAlbum/bda3961e-0dd5-4305-b842-7a446df3a81e.jpeg",
  "./FotosAlbum/Captura_de_pantalla_2026-03-21_213558.png",
  "./FotosAlbum/Captura_de_pantalla_2026-03-21_213609.png",
  "./FotosAlbum/Captura_de_pantalla_2026-03-23_185617.png",
  "./FotosAlbum/Captura_de_pantalla_2026-04-01_211135.png",
  "./FotosAlbum/Captura_de_pantalla_2026-04-01_233730.png",
  "./FotosAlbum/Captura_de_pantalla_2026-04-25_010938.png",
  "./FotosAlbum/Captura_de_pantalla_2026-04-26_223556.png",
  "./FotosAlbum/cec090c6-bd09-4ae0-8937-03b093901054.jpeg",
  "./FotosAlbum/ddd4f10c-33dc-4962-a59a-1450a31f808b.jpeg",
  "./FotosAlbum/image.png",
  "./FotosAlbum/MedalTVRoblox20260427004236165.png",
  "./FotosAlbum/MedalTVRoblox20260427005010362.png",
  "./FotosAlbum/MedalTVRoblox20260427020410160.png",
  "./FotosAlbum/MedalTVRoblox20260515025723919.png",
  "./FotosAlbum/MedalTVRoblox20260516014021472.png",
  "./FotosAlbum/MedalTVRoblox20260516014044178.png",
  "./FotosAlbum/MedalTVRoblox20260516014046200.png",
  "./FotosAlbum/MedalTVRoblox20260516014838970.png",
  "./FotosAlbum/MedalTVRoblox20260516014841783.png",
  "./FotosAlbum/Screenshot 2026-05-17 012901.png",
];

const Password = 2315;
let OnAlbum = false;

const TextoCarta =
  "Hoy se cumple el segundo mes desde que somos novios, aunque creo que seria mejor decir 1 año, ya que nos llevamos conociendo un año, pero ese año desde que te conozco todo ha sido mejor en mi vida, eres mi felicidad, mi niña hermosa. Nuestro vinculo siempre ha sido especial, aunque nos cagaramos al inicio, Aunque no nos enamoramos enseguida, siempre te me hiciste muy hermosa linda preciosa, tus ojitos tan bellos, tu risa tan tierna, tu nariz, boca y cejas divinas, todo de ti es simplemente perfecto, me super encantas. El otro dia en el cine cuando fui a ver la de digital circus vi una parejita en la fila de palomitas, los cuales te juro que me recordo a ti y a mi, estaban jugando mientras esperaba y se la pasaban abrazador, entonces quiero que seamos ellos algun dia en persona, poder conocerte y dormir abrazados. Me la he pasado muy bien contigo, aunque ya no nos develamos como antes, aun asi es bueno poder hablar conitgo, de verdad me gustaria poder llegar a vivir juntos en la vida real, sea en tu ciudad en la mio o en alguna otra, pero con que tu estes ahi por mi estaria perfecto, poder tener 2 hijos(sean naturales o adoptados, depende eso de ti), tener 2 gatos y 3 hurones, es increible el imaginar como voy a despertar y lo primero que vere a mi lado es a ti durmiendo en la misma cama, sera arte ver tu carita bonita, poder desayunar y comer juntos, lo primero que comprare sera dos sillas para que puedas estar sentada alado mio mientras estoy en la computadora, o si quieres en una misma silla. Y AUNQ NO LO QUIERAS VAS A SER MANTENIDA, no quiero que llegues cansada del trabajo o que te estreses por el trabajo, me gustaria tener a mi lado en la casa mientras trabajo en la pc, tampoco vas a ser la que limpia ya q contratare alguien que limpie, tu solo disfrutalas el no tener que hacer cosas cansadas, aunque si quieres podemos hacer la cafeteria que tanto quieres juntos, si quieres trabajar entonces podemos abrir la cafeteria juntos y ser los unicos trabajadores. Nos queda bastante tiempo para eso pero me gusta pensar en nuestro futuro juntos, tu eres una chica que cambio mi vida para bien, gracias por estar en mi vida, eres lo mejor que me ha pasado. Aparte desde la anterior vez pueees nuestra confianza ha mejorado, ya nos decimos te amo en llamada y aveces cosas cursys en llamada, cada dia vamos progresando mas, aun nos falta agarrar full confianza en la relacion, pero vamos bien, yo contigo siempre voy a tener la misma confianza que tu me tengas a mi, entonces no te preocupes por que falte confianza porque siempre voy a confiar en ti en todo, te amo mi lunita 🩷🩷";

const titulo = document.getElementById("Titulo");
const cartaContainer = document.getElementById("CartaContainer");
const final = document.getElementById("final");

init();

function init() {
  ocultarContenido();

  mostrarPassword();
}

function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function iniciarAlbum() {
  const audio = new Audio("./Song.mp3");

  audio.volume = 1;

  try {
    await audio.play();
  } catch (err) {
    console.error(err);
  }

  document.body.innerHTML = "";
  document.body.style.margin = "0";
  document.body.style.background = "#000";
  document.body.style.overflow = "hidden";

  OnAlbum = true;

  const contenedor = document.createElement("div");

  Object.assign(contenedor.style, {
    position: "fixed",
    inset: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    background: "#000",
  });

  document.body.appendChild(contenedor);

  const fondo = document.createElement("img");

  Object.assign(fondo.style, {
    position: "absolute",
    inset: "0",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "blur(60px) brightness(.3)",
    transform: "scale(1.3)",
    transition: "all 1.5s ease",
  });

  contenedor.appendChild(fondo);

  for (let i = 0; i < 50; i++) {
    const heart = document.createElement("div");

    heart.innerHTML = "💖";

    Object.assign(heart.style, {
      position: "absolute",
      fontSize: `${15 + Math.random() * 20}px`,
      left: `${Math.random() * 100}%`,
      top: `${100 + Math.random() * 20}%`,
      opacity: ".7",
      pointerEvents: "none",
    });

    contenedor.appendChild(heart);

    heart.animate(
      [
        {
          transform: "translateY(0px) rotate(0deg)",
          opacity: 0,
        },
        {
          opacity: 1,
        },
        {
          transform: `
            translateY(-${window.innerHeight + 300}px)
            translateX(${(Math.random() - 0.5) * 200}px)
            rotate(${Math.random() * 720 - 360}deg)
          `,
          opacity: 0,
        },
      ],
      {
        duration: 8000 + Math.random() * 4000,
        delay: Math.random() * 4000,
        iterations: Infinity,
        easing: "linear",
      },
    );
  }

  const vignette = document.createElement("div");

  Object.assign(vignette.style, {
    position: "absolute",
    inset: "0",
    background:
      "radial-gradient(circle, transparent 40%, rgba(0,0,0,.75) 100%)",
    pointerEvents: "none",
  });

  contenedor.appendChild(vignette);

  const marco = document.createElement("div");

  Object.assign(marco.style, {
    position: "relative",
    background: "#fff",
    padding: "15px 15px 70px 15px",
    borderRadius: "10px",
    boxShadow: `
      0 20px 80px rgba(0,0,0,.6),
      0 0 120px rgba(255,105,180,.15)
    `,
    opacity: "0",
  });

  contenedor.appendChild(marco);

  const imagen = document.createElement("img");

  Object.assign(imagen.style, {
    display: "block",
    maxWidth: "80vw",
    maxHeight: "75vh",
    borderRadius: "4px",
    objectFit: "cover",
  });

  marco.appendChild(imagen);

  const flash = document.createElement("div");

  Object.assign(flash.style, {
    position: "fixed",
    inset: "0",
    background: "#fff",
    opacity: "0",
    pointerEvents: "none",
    zIndex: "99999",
  });

  document.body.appendChild(flash);

  for (const foto of FotosAlbum) {
    await new Promise((resolve) => {
      const preload = new Image();

      preload.onload = resolve;
      preload.src = foto;
    });

    imagen.src = foto;
    fondo.src = foto;

    flash.animate([{ opacity: 0 }, { opacity: 0.25 }, { opacity: 0 }], {
      duration: 250,
    });

    const rotacion = [-8, -6, -4, 4, 6, 8][Math.floor(Math.random() * 6)];

    marco.animate(
      [
        {
          opacity: 0,
          transform: `
            translateY(80px)
            scale(.85)
            rotate(${rotacion}deg)
          `,
        },
        {
          opacity: 1,
          transform: `
            translateY(0px)
            scale(1)
            rotate(${rotacion}deg)
          `,
        },
      ],
      {
        duration: 1500,
        fill: "forwards",
        easing: "cubic-bezier(.17,.89,.32,1.2)",
      },
    );

    imagen.animate(
      [
        {
          transform: "scale(1)",
        },
        {
          transform: "scale(1.15)",
        },
      ],
      {
        duration: 6000,
        fill: "forwards",
        easing: "linear",
      },
    );

    await esperar(5000);

    marco.animate(
      [
        {
          opacity: 1,
          transform: `
            scale(1)
            rotate(${rotacion}deg)
          `,
        },
        {
          opacity: 0,
          transform: `
            scale(.9)
            rotate(${rotacion * 1.5}deg)
          `,
        },
      ],
      {
        duration: 1200,
        fill: "forwards",
        easing: "ease-in-out",
      },
    );

    await esperar(1200);
  }

  const negro = document.createElement("div");

  Object.assign(negro.style, {
    position: "fixed",
    inset: "0",
    background: "#000",
    opacity: "0",
    zIndex: "999999",
  });

  document.body.appendChild(negro);

  negro.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: 2500,
    fill: "forwards",
  });

  await esperar(2500);

  mostrarTeAmo();
}

function mostrarTeAmo() {
  document.body.innerHTML = "";
  document.body.style.margin = "0";
  document.body.style.overflow = "hidden";
  document.body.style.background =
    "radial-gradient(circle at center, #fff8fb 0%, #ffd9e8 100%)";

  const container = document.createElement("div");

  Object.assign(container.style, {
    position: "fixed",
    inset: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });

  document.body.appendChild(container);

  for (let i = 0; i < 60; i++) {
    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    const size = Math.random() * 30 + 15;
    const startX = Math.random() * window.innerWidth;

    Object.assign(heart.style, {
      position: "fixed",
      left: `${startX}px`,
      bottom: "-50px",
      fontSize: `${size}px`,
      opacity: "0",
      pointerEvents: "none",
    });

    document.body.appendChild(heart);

    heart.animate(
      [
        {
          transform: "translateY(0) scale(0.5) rotate(0deg)",
          opacity: 0,
        },
        {
          opacity: 1,
        },
        {
          transform: `translateY(-${window.innerHeight + 200}px)
                      translateX(${(Math.random() - 0.5) * 200}px)
                      rotate(${Math.random() * 720 - 360}deg)`,
          opacity: 0,
        },
      ],
      {
        duration: 6000 + Math.random() * 4000,
        delay: Math.random() * 3000,
        iterations: Infinity,
        easing: "linear",
      },
    );
  }

  const glow = document.createElement("div");

  Object.assign(glow.style, {
    position: "absolute",
    width: "600px",
    height: "600px",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(255,120,180,.35), transparent 70%)",
    filter: "blur(50px)",
  });

  container.appendChild(glow);

  const texto = document.createElement("h1");

  texto.textContent = "Te Amo ❤️";

  Object.assign(texto.style, {
    position: "absolute",
    fontSize: "9rem",
    fontWeight: "900",
    fontFamily: "cursive",
    color: "#ff4f93",
    opacity: "0",
    textShadow: `
      0 0 10px #fff,
      0 0 20px #ff8ec2,
      0 0 40px #ff69b4,
      0 0 80px #ff69b4
    `,
  });

  container.appendChild(texto);

  texto.animate(
    [
      {
        opacity: 0,
        transform: "perspective(1000px) rotateX(90deg) scale(0.1)",
        filter: "blur(30px)",
      },
      {
        opacity: 1,
        transform: "perspective(1000px) rotateX(-10deg) scale(1.15)",
        filter: "blur(0px)",
      },
      {
        opacity: 1,
        transform: "perspective(1000px) rotateX(0deg) scale(1)",
      },
    ],
    {
      duration: 2500,
      easing: "cubic-bezier(.17,.89,.32,1.5)",
      fill: "forwards",
    },
  );

  setTimeout(() => {
    texto.animate(
      [
        {
          transform: "scale(1)",
          textShadow: `
            0 0 10px #fff,
            0 0 20px #ff8ec2,
            0 0 40px #ff69b4
          `,
        },
        {
          transform: "scale(1.08)",
          textShadow: `
            0 0 20px #fff,
            0 0 40px #ff8ec2,
            0 0 80px #ff69b4
          `,
        },
        {
          transform: "scale(1)",
          textShadow: `
            0 0 10px #fff,
            0 0 20px #ff8ec2,
            0 0 40px #ff69b4
          `,
        },
      ],
      {
        duration: 1400,
        iterations: Infinity,
        easing: "ease-in-out",
      },
    );
  }, 2500);

  const flash = document.createElement("div");

  Object.assign(flash.style, {
    position: "fixed",
    inset: "0",
    background: "#fff",
    opacity: "1",
    pointerEvents: "none",
  });

  document.body.appendChild(flash);

  flash.animate([{ opacity: 1 }, { opacity: 0 }], {
    duration: 1200,
    fill: "forwards",
  });
}

function ocultarContenido() {
  titulo.style.display = "none";
  cartaContainer.style.display = "none";
  final.style.display = "none";
}

function mostrarContenido() {
  titulo.style.display = "";
  cartaContainer.style.display = "";
  final.style.display = "";

  crearCarta();
  iniciarFotosFlotantes();
}

function mostrarPassword() {
  document.body.innerHTML = "";

  const container = document.createElement("div");

  const titulo = document.createElement("h1");
  titulo.textContent = "Ingresa la contraseña";

  const input = document.createElement("input");
  input.type = "password";

  const boton = document.createElement("button");
  boton.textContent = "Entrar";

  const error = document.createElement("h1");
  error.style.display = "none";
  error.textContent = "Vuelve a intentar";

  boton.onclick = () => {
    if (Number(input.value) === Password) {
      restaurarPagina();
    } else {
      error.style.display = "block";
    }
  };
  container.appendChild(titulo);
  container.appendChild(input);
  container.appendChild(boton);
  container.appendChild(error);

  document.body.appendChild(container);
}

function restaurarPagina() {
  document.body.innerHTML = `
    <div id="Titulo">
        <h1>Feliz segundo aniversario</h1>
        <h3>Te doy con mucho amor esta cartita</h3>
    </div>

    <div id="CartaContainer"></div>

    <div id="final">
        <button id="Boton">💜 Presióname</button>

        <p>
            Espero que te haya gustado mucho esta carta que te hice,
            quiero tener una familia contigo,
            gracias por seguir siendo mi novia hermosota
        </p>
    </div>
`;

  mostrarContenido();
  const boton = document.getElementById("Boton");

  boton.addEventListener("click", iniciarAlbum);
}

function crearCarta() {
  const container = document.getElementById("CartaContainer");

  container.style.display = "flex";
  container.style.justifyContent = "center";

  const carta = document.createElement("div");

  carta.id = "Carta";

  const texto = document.createElement("p");

  texto.textContent = TextoCarta;

  texto.style.maxWidth = "700px";
  texto.style.width = "100%";

  texto.style.wordBreak = "break-word";
  texto.style.overflowWrap = "break-word";
  texto.style.whiteSpace = "pre-wrap";

  texto.style.lineHeight = "1.8";
  texto.style.fontSize = "24px";

  texto.style.textAlign = "left";

  carta.appendChild(texto);

  container.appendChild(carta);
}

function iniciarFotosFlotantes() {
  if (!FotosFlotantes.length) {
    return;
  }
  if (OnAlbum === true) {
    return;
  }

  const MAX_FOTOS = 15;

  const crearFoto = () => {
    if (OnAlbum === true) {
      return;
    }
    const imagen = document.createElement("img");

    imagen.src =
      FotosFlotantes[Math.floor(Math.random() * FotosFlotantes.length)];

    imagen.style.position = "fixed";
    imagen.style.top = "-150px";

    const anchoPantalla = window.innerWidth;

    const zonaCentroInicio = anchoPantalla * 0.25;
    const zonaCentroFin = anchoPantalla * 0.75;

    let x;

    if (Math.random() < 0.5) {
      x = Math.random() * zonaCentroInicio;
    } else {
      x = zonaCentroFin + Math.random() * (anchoPantalla - zonaCentroFin);
    }

    imagen.style.left = `${x}px`;

    const size = 80 + Math.random() * 70;

    imagen.style.width = `${size}px`;

    imagen.style.pointerEvents = "none";
    imagen.style.userSelect = "none";
    imagen.style.zIndex = "1";

    document.body.appendChild(imagen);

    let y = -150;

    const velocidad = 1 + Math.random() * 2;
    const rotacion = -15 + Math.random() * 30;

    const loop = () => {
      y += velocidad;

      imagen.style.transform = `translateY(${y}px) rotate(${rotacion}deg)`;

      if (y > window.innerHeight + 300) {
        imagen.remove();
        crearFoto();
        return;
      }

      requestAnimationFrame(loop);
    };

    requestAnimationFrame(loop);
  };

  for (let i = 0; i < MAX_FOTOS; i++) {
    if (OnAlbum === true) {
      return;
    }
    crearFoto();
  }
}
