<template>
  <main
      class="container mx-auto flex flex-col lg:my-9 max-w-screen-lg bg-gray-50 shadow-2xl md:rounded-lg overflow-hidden">
    <NuxtRouteAnnouncer/>

    <header class="flex flex-col gap-3 relative overflow-hidden h-auto group">
      <div class="relative">
        <img class="transition-all duration-500 group-hover:scale-105" src="@/public/images/hlavni.jpg"
             alt="Terka s Jirkou"/>
        <div class="absolute inset-0 bg-gradient-to-r from-lime-950 to-60%"></div>
      </div>

      <div class="flex absolute inset-0">
        <div class="flex flex-1 flex-col p-6 md:p-14 justify-center md:justify-normal">
          <div class="flex-col text-white font-bold hidden md:flex text-7xl">
            <span>01</span>
            <span>11</span>
            <span>24</span>
          </div>

          <div class="ml-10 my-4 w-1 bg-white grow hidden md:block"></div>

          <div class="flex flex-col">
            <span class="text-white font-bold text-5xl md:text-8xl font-gwendolyn">Tereza & Jiří</span>
            <span class="text-white text-3xl md:text-6xl font-gwendolyn">si řeknou své <b>Ano</b></span>
          </div>
        </div>
      </div>
    </header>

    <div class="flex flex-col gap-12 p-6 md:p-12">
      <section class="flex flex-col gap-3">
        <div class="flex flex-col gap-3">
          <p>Jsme nadšení, že se s Vámi můžeme podělit o tento jedinečný okamžik našeho života.</p>

          <p>
            Náš příběh začal před více než <b>9-ti lety</b>, kdy jsme se poprvé potkali, a za posledních 5 let jsme
            spolu
            vybudovali nejen krásný vztah, ale také náš společný domov.
          </p>

          <p>
            Stavba domu pro nás byla velkou výzvou, ale zároveň nám ukázala, jak silní jsme jako tým a jak moc se jeden
            na druhého můžeme spolehnout.
          </p>

          <p>
            Na této stránce najdete <b>všechny důležité informace</b> o našem svatebním dni – od místa konání, přes
            časový
            plán,
            až po další detaily, které vám pomohou užít si s námi tento výjimečný den.
          </p>

          <p>
            Těšíme se, že s námi oslavíte tento den a budete svědky naší lásky a radosti. Abychom si všichni mohli
            naplno
            užít večer, rádi bychom Vás požádali, abyste si, pokud to bude možné, na tento den <b>zajistili hlídání pro
            Vaše děti.</b>
          </p>

          <p class="italic">S láskou, Tereza a Jiří</p>
        </div>
      </section>

      <section class="flex flex-col gap-3">
        <div v-if="!showConfirmParticipationForm" class="flex justify-center">
          <button id="potvrzeni-ucasti"
                  class="text-4xl font-bold font-gwendolyn bg-emerald-900 text-white rounded-xl py-3 px-6 hover:bg-primary transition-all hover:scale-105"
                  @click="showConfirmParticipationForm=true">
            Vyplnit svatební dotazník
          </button>
        </div>

        <form v-if="showConfirmParticipationForm" class="flex flex-col gap-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div class="flex flex-col gap-1">
              <label for="first-name">Jméno</label>
              <input id="first-name" name="first-name" type="text"/>
            </div>

            <div class="flex flex-col gap-1">
              <label for="last-name">Příjmení</label>
              <input id="last-name" name="last-name" type="text"/>
            </div>
          </div>

          <div class="flex flex-col gap-1">
            <label for="email">E-mail</label>
            <input id="email" name="email" type="email"/>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div class="flex flex-col gap-1">
              <span>Přijdete na naší svatbu?</span>

              <div class="flex gap-6">
                <div class="flex gap-1 items-center">
                  <input type="radio" id="attend-yes" name="attend" value="yes" checked/>
                  <label for="attend-yes">Ano</label>
                </div>

                <div class="flex gap-1 items-center">
                  <input type="radio" id="attend-no" name="attend" value="no"/>
                  <label for="attend-no">Bohužel, nemůžeme</label>
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-1">
              <span>Zůstanete přes noc?</span>

              <div class="flex gap-6">
                <div class="flex gap-1 items-center">
                  <input type="radio" id="sleep-yes" name="sleep" value="yes"/>
                  <label for="sleep-yes">Ano</label>
                </div>

                <div class="flex gap-1 items-center">
                  <input type="radio" id="sleep-no" name="sleep" value="no"/>
                  <label for="sleep-no">Ne</label>
                </div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div class="flex flex-col gap-1">
              <label for="how-much-will-come">Kolik Vás bude?</label>
              <input id="how-much-will-come" name="how-much-will-come" type="number"/>
            </div>

            <div class="flex flex-col gap-1">
              <label for="how-much-child-come">Kolik z toho dětí?</label>
              <input id="how-much-child-come" name="how-much-child-come" type="number"/>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row gap-3 sm:gap-6">
            <div class="flex gap-1 items-center">
              <input type="checkbox" id="child-count-0-3" name="child-count-0-3" value="0-3"/>
              <label for="child-count-0-3">0-3 let</label>
            </div>

            <div class="flex gap-1 items-center">
              <input type="checkbox" id="child-count-4-6" name="child-count-4-6" value="4-6"/>
              <label for="child-count-4-6">4-6 let</label>
            </div>

            <div class="flex gap-1 items-center">
              <input type="checkbox" id="child-count-7-10" name="child-count-7-10" value="7-10"/>
              <label for="child-count-7-10">7-10 let</label>
            </div>

            <div class="flex gap-1 items-center">
              <input type="checkbox" id="child-count-older" name="child-count-older" value="older"/>
              <label for="child-count-older">starší</label>
            </div>
          </div>

          <div class="flex flex-col gap-1">
            <label for="food-restrictions">Potravinové omezení</label>
            <textarea id="food-restrictions" rows="3" name="food-restrictions"/>
          </div>

          <div class="flex justify-center">
            <button
                class="text-4xl font-bold font-gwendolyn bg-emerald-900 text-white rounded-xl py-3 px-6 hover:bg-primary transition-all hover:scale-105"
                type="submit">Odeslat dotazník
            </button>
          </div>
        </form>
      </section>

      <hr class="mx-12"/>

      <section class="flex flex-col gap-6">
        <h2 class="text-5xl font-bold font-gwendolyn text-center">Kdy a kde se sejdeme</h2>

        <div class="flex flex-col">
          <p class="text-center">Sejdeme se v <b>pátek 1.11.2024</b> ve <b>13 hodin</b> v <a
              href="https://www.restaurace-mohelenskydvur.cz/" target="_blank" class="underline">Mohelenském Dvoře</a>.
          </p>
        </div>

        <iframe class="border-0 w-full aspect-video" src="https://frame.mapy.cz/s/pebavopoja" frameborder="0"></iframe>
      </section>

      <hr class="mx-12"/>

      <section class="flex flex-col gap-3">
        <h2 class="text-5xl font-bold font-gwendolyn">Program</h2>

        <p>Bude brzy doplněno...</p>
      </section>

      <section class="flex flex-col gap-3">
        <h2 class="text-5xl font-bold font-gwendolyn">Dress code</h2>

        <p>Radost nám uděláte, pokud přijdete v podzimních barvách. Barva svatby bude <b>smaragdová</b>.</p>
      </section>

      <section class="flex flex-col gap-3">
        <h2 class="text-5xl font-bold font-gwendolyn">Dary</h2>

        <p>
          Už spolu nějaký ten pátek bydlíme a vše již doma máme. Největší radost udělá <b>finanční příspěvek</b> na
          svatební
          cestu a tento nezapomenutelný den.
        </p>
      </section>

      <section class="flex flex-col gap-3">
        <h2 class="text-5xl font-bold font-gwendolyn">Ubytování</h2>

        <div class="flex flex-col">
          <p>
            Ubytování je možné v místě konání svatby <span class="italic">(21 lůžek)</span>.
            Další možnost ubytování je v penzionu <a class="underline" href="https://penzionuvalesu.cz/"
                                                     target="_blank">U Valešů</a> přímo
            naproti Mohelenskému Dvoru <span class="italic">(19 lůžek)</span>.
            Proto prosíme o důkladné vyplnění <a class="underline" href="#potvrzeni-ucasti">svatebního dotazníku</a>,
            abychom věděli kolik hostů má zájem přespat.
          </p>
        </div>
      </section>

      <section class="flex flex-col gap-3">
        <h2 class="text-5xl font-bold font-gwendolyn">Fotogalerie</h2>

        <p>Hned po svatbě budou nahrány fotky a videa.</p>
      </section>

      <hr class="mx-12"/>

      <section class="flex flex-col gap-6">
        <h2 class="text-5xl font-bold font-gwendolyn text-center">Kontaktní osoby</h2>

        <div class="flex flex-col gap-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24">
            <div class="flex flex-col items-center gap-3">
              <div class="w-52 h-52 overflow-hidden rounded-full">
                <img class="duration-500 transition-all hover:scale-105" src="@/public/images/svedkyne.jpg"
                     alt="Svědkyně"/>
              </div>

              <div class="flex flex-col items-center gap-1">
                <span class="text-xl font-semibold text-center">Monča Poláková</span>
                <span class="text-lg">Svědkyně</span>
              </div>
            </div>

            <div class="flex flex-col items-center gap-3">
              <div class="w-52 h-52 overflow-hidden rounded-full">
                <img class="duration-500 transition-all hover:scale-105" src="@/public/images/svedek.jpg" alt="Svědek"/>
              </div>

              <div class="flex flex-col items-center gap-1">
                <span class="text-xl font-semibold text-center">Jakub Šebela</span>
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
  title: "Svatba Kadlecovi 2024"
})

const showConfirmParticipationForm = ref(false)
</script>
