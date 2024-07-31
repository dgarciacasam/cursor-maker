export const Text = ({ fill, stroke }) => {
  return (
    <article>
      <svg
        height='32'
        viewBox='0 0 32 32'
        width='32'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='m6.12306605-.48331676c.43304536-.02942018.89723494-.01586641 1.23506765.01110645l.09836607 2.00031187c-.52088553-.02633116-.86402421-.03615261-1.16297111-.01823278-.57216322.1246759-.83397559.26379885-1.13476879.47262866-.20678677.14251521-.54543639.60542479-.68837291.9244994v4.53970853h.998v1.984h-.998v3.57686113c.14285978.3186299.48159131.7805976.69278827.9256073.28177652.1964385.52739561.3374074.74486623.4121252.92617851.1117241.86141186.0439655 1.38886347.0608526l.24148845 1.9771822c-.63869922.0316331-1.03914186.0381475-1.41606129.0122618-.31198863-.0214264-.57343006-.0643378-.77405544-.129216-.41684626-.1296585-.85258908-.3604995-1.32295099-.6884424-.16852556-.1156905-.3571101-.2906327-.54285865-.4981462-.17040902.2017941-.33955796.3725205-.48392771.4855461-.40405946.3138676-.86631905.544191-1.35971316.6990619-.21164232.068207-.47249574.1108318-.78353769.1322303-.43450358.0298922-.90002831.0163041-1.23810501-.010835l-.09691742-2.0002571c.51770616.0263348.86168069.0362399 1.16109487.0181487.6186734-.1394818.87678125-.2519735 1.08726671-.4154673.19712987-.1543365.58456002-.6802379.70170954-.9838289l.01232275-3.57368433h-1.00027293v-1.984h1.002v-4.53315423c-.13203427-.30699537-.51655024-.83390163-.71128328-.98567507-.2013222-.15578504-.43877755-.27368925-.70166256-.36109174-.92774648-.11104657-.86334532-.04378063-1.3908609-.06035307l-.24301648-1.97729129c.64057546-.03160079 1.04058994-.03810767 1.41699023-.01249118.31067274.02114331.57118123.06339129.7795926.13006754.50016024.15848101.96025701.38783055 1.36565801.70154178.14340254.11176212.31252725.28238091.4832615.48453047.18451625-.20650555.37147758-.38041205.53791304-.49511426.47467546-.32956039.90822271-.55967002 1.31895768-.68980909.21133301-.06776711.4720386-.11004715.78312925-.13118199z'
          fill={fill}
          fill-rule='evenodd'
          stroke={stroke}
          stroke-linejoin='round'
          transform='translate(13 8)'
        />
      </svg>
      <span>Text</span>
    </article>
  )
}
