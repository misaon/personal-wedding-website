<template>
  <main
    class="container mx-auto flex flex-col lg:my-9 max-w-screen-lg bg-gray-50 shadow-2xl md:rounded-lg overflow-hidden"
  >
    <NuxtRouteAnnouncer />

    <img
      class="absolute top-0 left-0 pointer-events-none hidden xl:block"
      src="@/public/images/plants.png"
      alt="decor"
    >
    <img
      class="absolute top-0 right-0 pointer-events-none hidden xl:block"
      src="@/public/images/plants-mirror.png"
      alt="decor"
    >

    <header class="flex flex-col gap-3 relative overflow-hidden h-auto group">
      <div class="relative">
        <img
          class="transition-all duration-500 group-hover:scale-105"
          src="@/public/images/hlavni.jpg"
          alt="Terka s Jirkou"
        >
        <div class="absolute inset-0 bg-gradient-to-r from-lime-950 to-60%" />
      </div>

      <div class="flex absolute inset-0">
        <div
          class="flex flex-1 flex-col p-6 md:px-14 md:p-10 justify-start md:justify-normal"
        >
          <div class="flex-col text-white font-bold hidden md:flex text-7xl">
            <span>01</span>
            <span>11</span>
            <span>24</span>
          </div>

          <div class="ml-10 my-8 w-1 bg-white grow hidden md:block" />

          <div class="flex flex-col">
            <span
              class="text-white font-bold text-6xl md:text-8xl font-parisienne"
              >Tereza & Jiří</span
            >
            <span class="text-white text-4xl md:text-6xl font-parisienne"
              >si řeknou své <b>Ano</b></span
            >
          </div>
        </div>
      </div>
    </header>

    <div class="flex flex-col gap-12 p-6 md:p-12">
      <section class="flex flex-col gap-3">
        <div class="flex flex-col gap-3">
          <p>
            Jsme nadšení, že se s Vámi můžeme podělit o tento jedinečný okamžik
            našeho života.
          </p>

          <p>
            Náš příběh začal před více než <b>9-ti lety</b>, kdy jsme se poprvé
            potkali, a za posledních 5 let jsme spolu vybudovali nejen krásný
            vztah, ale také náš společný domov.
          </p>

          <p>
            Stavba domu pro nás byla velkou výzvou, ale zároveň nám ukázala, jak
            silní jsme jako tým a jak moc se jeden na druhého můžeme spolehnout.
          </p>

          <p>
            Na této stránce najdete <b>všechny důležité informace</b> o našem
            svatebním dni – od místa konání, přes časový plán, až po další
            detaily, které vám pomohou užít si s námi tento výjimečný den.
          </p>

          <p>
            Těšíme se, že s námi oslavíte tento den a budete svědky naší lásky a
            radosti. Abychom si všichni mohli naplno užít večer, rádi bychom Vás
            požádali, abyste si, pokud to bude možné, na tento den
            <b>zajistili hlídání pro Vaše děti.</b>
          </p>

          <p class="italic">S láskou, Tereza a Jiří</p>
        </div>
      </section>

      <section class="flex flex-col gap-3">
        <div
          v-if="
            !showConfirmParticipationForm &&
            confirmParticipationFormIsSentOk === undefined
          "
          class="flex justify-center"
        >
          <button
            id="potvrzeni-ucasti"
            class="text-4xl font-bold font-parisienne bg-emerald-900 text-white rounded-xl py-3 px-6 hover:bg-primary transition-all hover:scale-105 animate-pulse"
            @click="showConfirmParticipationForm = true"
          >
            Vyplnit svatební dotazník
          </button>
        </div>

        <div
          v-if="confirmParticipationFormIsSentOk !== undefined"
          class="text-white text-center"
        >
          <div
            v-if="confirmParticipationFormIsSentOk === true"
            class="bg-primary p-3 rounded"
          >
            Děkujeme za vyplnění dotazníku!
          </div>
          <div
            v-if="confirmParticipationFormIsSentOk === false"
            class="bg-red-400 p-3 rounded"
          >
            Během odesílání nastala chyba!
          </div>
        </div>

        <form
          v-if="showConfirmParticipationForm"
          class="flex flex-col gap-6"
          @submit="handleConfirmParticipationFormSubmit"
        >
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div class="flex flex-col gap-1">
              <label for="full-name">Vaše jméno</label>
              <input
                id="full-name"
                v-model.trim="fullName"
                type="text"
                required
                class="border-primary focus:border-primary focus:ring-primary"
              >
            </div>

            <div class="flex flex-col gap-1">
              <label for="email">E-mail</label>
              <input
                id="email"
                v-model.trim="email"
                type="email"
                class="border-primary focus:border-primary focus:ring-primary"
                required
              >
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div class="flex flex-col gap-1">
              <span>Přijdete na naší svatbu?</span>

              <div class="flex gap-6">
                <div class="flex gap-1 items-center">
                  <input
                    id="attend-yes"
                    v-model="attend"
                    type="radio"
                    value="yes"
                    class="text-primary focus:ring-primary"
                  >
                  <label for="attend-yes">Ano</label>
                </div>

                <div class="flex gap-1 items-center">
                  <input
                    id="attend-no"
                    v-model="attend"
                    type="radio"
                    value="no"
                    class="text-primary focus:ring-primary"
                  >
                  <label for="attend-no">Bohužel, nemůžeme</label>
                </div>
              </div>
            </div>

            <div v-if="attend === 'yes'" class="flex flex-col gap-1">
              <span>Zůstanete přes noc?</span>

              <div class="flex gap-6">
                <div class="flex gap-1 items-center">
                  <input
                    id="sleep-yes"
                    v-model="sleep"
                    type="radio"
                    value="yes"
                    class="text-primary focus:ring-primary"
                  >
                  <label for="sleep-yes">Ano</label>
                </div>

                <div class="flex gap-1 items-center">
                  <input
                    id="sleep-no"
                    v-model="sleep"
                    type="radio"
                    value="no"
                    checked
                    class="text-primary focus:ring-primary"
                  >
                  <label for="sleep-no">Ne</label>
                </div>
              </div>
            </div>
          </div>

          <template v-if="attend === 'yes'">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div class="flex flex-col gap-1">
                <label for="how-much-will-come">Kolik Vás bude?</label>
                <input
                  id="how-much-will-come"
                  v-model.number="howMuchWillCome"
                  type="number"
                  min="0"
                  class="border-primary focus:border-primary focus:ring-primary"
                >
              </div>

              <div class="flex flex-col gap-1">
                <label for="how-much-child-come">Kolik z toho dětí?</label>
                <input
                  id="how-much-child-come"
                  v-model.number="howMuchChildCome"
                  type="number"
                  min="0"
                  class="border-primary focus:border-primary focus:ring-primary"
                >
              </div>
            </div>

            <div
              v-if="howMuchChildCome"
              class="flex flex-col sm:flex-row gap-3 sm:gap-6"
            >
              <div class="flex gap-1 items-center">
                <input
                  id="child-age-0-3"
                  v-model="childAge['0-3']"
                  type="checkbox"
                  false-value=""
                  true-value="0-3"
                  class="text-primary focus:ring-primary"
                >
                <label for="child-age-0-3">0-3 let</label>
              </div>

              <div class="flex gap-1 items-center">
                <input
                  id="child-age-4-6"
                  v-model="childAge['4-6']"
                  type="checkbox"
                  false-value=""
                  true-value="4-6"
                  class="text-primary focus:ring-primary"
                >
                <label for="child-age-4-6">4-6 let</label>
              </div>

              <div class="flex gap-1 items-center">
                <input
                  id="child-age-7-10"
                  v-model="childAge['7-10']"
                  type="checkbox"
                  false-value=""
                  true-value="7-10"
                  class="text-primary focus:ring-primary"
                >
                <label for="child-age-7-10">7-10 let</label>
              </div>

              <div class="flex gap-1 items-center">
                <input
                  id="child-age-older"
                  v-model="childAge.older"
                  type="checkbox"
                  false-value=""
                  true-value="older"
                  class="text-primary focus:ring-primary"
                >
                <label for="child-age-older">starší</label>
              </div>
            </div>

            <div class="flex flex-col gap-1">
              <label for="food-restrictions">Potravinové omezení</label>
              <textarea
                id="food-restrictions"
                v-model.trim="foodRestrictions"
                rows="3"
                class="border-primary focus:border-primary focus:ring-primary"
              />
            </div>
          </template>

          <div class="flex justify-center">
            <button
              class="text-4xl font-bold font-parisienne bg-emerald-900 text-white rounded-xl py-3 px-6 hover:bg-primary transition-all hover:scale-105"
              type="submit"
            >
              Odeslat dotazník
            </button>
          </div>
        </form>
      </section>

      <hr class="mx-12" >

      <section class="flex flex-col gap-6">
        <h2 class="text-5xl font-bold font-parisienne text-center text-primary">
          Kdy a kde se sejdeme
        </h2>

        <div class="flex flex-col text-center gap-3">
          <p>
            Sejdeme se v <b>pátek 1.11.2024</b> ve <b>12:30</b> v
            <a
              href="https://www.restaurace-mohelenskydvur.cz/"
              target="_blank"
              class="underline"
              >Mohelenském Dvoře</a
            >.
          </p>

          <p>
            Své ano si řekneme ve venkovních prostorách areálu Mohelenského
            Dvora.<br >
            Do vnitřních prostor restaurace nás pustí až po obřadu.
          </p>
        </div>

        <iframe
          class="border-0 w-full aspect-video"
          src="https://frame.mapy.cz/s/pebavopoja"
          frameborder="0"
        />
      </section>

      <hr class="mx-12" >

      <section class="flex flex-col gap-3 text-center">
        <h2 class="text-5xl font-bold font-parisienne text-primary">Program</h2>

        <p>Bude brzy doplněno...</p>
      </section>

      <section class="flex flex-col gap-3 text-center">
        <h2 class="text-5xl font-bold font-parisienne text-primary">
          Dress code
        </h2>

        <p>
          Radost nám uděláte, pokud přijdete v podzimních barvách. Barva svatby
          bude <b>smaragdová</b>.
        </p>
      </section>

      <section class="flex flex-col gap-3 text-center">
        <h2 class="text-5xl font-bold font-parisienne text-primary">Dary</h2>

        <p>
          Už spolu nějaký ten pátek bydlíme a vše již doma máme. Největší radost
          nám udělá <b>finanční příspěvek</b> na svatební cestu a tento
          nezapomenutelný den.
        </p>
      </section>

      <section class="flex flex-col gap-3 text-center">
        <h2 class="text-5xl font-bold font-parisienne text-primary">
          Ubytování
        </h2>

        <div class="flex flex-col">
          <p>
            Ubytování je možné v místě konání svatby
            <span class="italic">(21 lůžek)</span>. Další možnost ubytování je v
            penzionu
            <a
              class="underline"
              href="https://penzionuvalesu.cz/"
              target="_blank"
              >U Valešů</a
            >
            přímo naproti Mohelenskému Dvoru
            <span class="italic">(19 lůžek)</span>. Proto prosíme o důkladné
            vyplnění
            <a class="underline" href="#potvrzeni-ucasti"
              >svatebního dotazníku</a
            >, abychom věděli kolik hostů má zájem přespat.
          </p>
        </div>
      </section>

      <section class="flex flex-col gap-3 text-center">
        <h2 class="text-5xl font-bold font-parisienne text-primary">
          Fotogalerie
        </h2>

        <p>Hned po svatbě budou nahrány fotky a videa.</p>
      </section>

      <hr class="mx-12" >

      <section class="flex flex-col gap-8">
        <div class="flex flex-col gap-3">
          <h2
            class="text-5xl font-bold font-parisienne text-center text-primary"
          >
            Kontaktní osoby
          </h2>

          <p class="text-center">
            Dotazy <b>před svatbou</b> směřujte prosím na nevěstu a ženicha.<br >
            <b>Během svatebního dne</b> prosím směřujte všechny Vaše dotazy na
            svědka a svědkyni.
          </p>
        </div>

        <div class="flex flex-col gap-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24">
            <div class="flex flex-col items-center gap-3">
              <div class="w-52 h-52 overflow-hidden rounded-full">
                <img
                  class="duration-500 transition-all hover:scale-105"
                  src="@/public/images/svedkyne.jpg"
                  alt="Svědkyně"
                >
              </div>

              <div class="flex flex-col items-center gap-1">
                <span class="text-xl font-semibold text-center"
                  >Monča Poláková</span
                >
                <span class="text-lg">Svědkyně</span>
              </div>
            </div>

            <div class="flex flex-col items-center gap-3">
              <div class="w-52 h-52 overflow-hidden rounded-full">
                <img
                  class="duration-500 transition-all hover:scale-105"
                  src="@/public/images/svedek.jpg"
                  alt="Svědek"
                >
              </div>

              <div class="flex flex-col items-center gap-1">
                <span class="text-xl font-semibold text-center"
                  >Jakub Šebela</span
                >
                <span class="text-lg">Svědek</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: "Svatba Kadlecovi 2024",
});

const showConfirmParticipationForm = ref(false);
const confirmParticipationFormIsSentOk = ref();

// Form fields
const fullName = ref("");
const email = ref("");
const attend = ref("yes");
const sleep = ref("no");
const howMuchWillCome = ref(2);
const howMuchChildCome = ref();
const childAge = ref({
  "0-3": "",
  "4-6": "",
  "7-10": "",
  older: "",
});
const foodRestrictions = ref();

async function handleConfirmParticipationFormSubmit(event: any) {
  event.preventDefault();
  event.stopPropagation();

  let additionalData: any = {
    sleep: sleep.value,
    howMuchWillCome: howMuchWillCome.value,
  };

  if (howMuchChildCome.value > 0) {
    additionalData = {
      ...additionalData,
      howMuchChildCome: howMuchChildCome.value,
      childAge: Object.values(childAge.value).filter((value) => value !== ""),
    };
  }

  const sendForm = await $fetch("/api/confirm-participation", {
    method: "post",
    body: {
      fullName: fullName.value,
      email: email.value,
      attend: attend.value,
      ...(attend.value === "yes"
        ? {
            ...additionalData,
            foodRestrictions: foodRestrictions.value,
          }
        : {}),
    },
  });

  showConfirmParticipationForm.value = false;
  confirmParticipationFormIsSentOk.value = sendForm.isOk;
}
</script>
