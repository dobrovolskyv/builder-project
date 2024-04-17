import { Box, Center, Flex, Heading, Image, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'

function blogItem() {
  return (
    <Flex flexDirection="column" justifyContent="center" mt="50px">
      <Heading as="h1">Виды фундаментов для частного дома: как не ошибиться в выборе основания для застройки</Heading>
      <Image src="./images/blogs/floor1.jpg"
        maxW="100%"
        w="650px"
        m="30px auto"
      />
      <Text>
        При проектировании и строительстве могут применяться разные виды фундаментов для частного дома. Выбор того или иного варианта обусловлен многими факторами: свойствами почвы на строительном участке, размерами строения, используемыми материалами, уровнем грунтовых вод и т.д. В этой статье мы рассмотрим основные факторы, которые необходимо учитывать при проектировании фундаментов.
      </Text>
      <Heading as="h2" m="20px 0" fontSize="24px">На чем основывать выбор того или иного вида фундамента для частного дома</Heading>
      <Text>
        Фундамент – важнейший элемент здания, который определяет продолжительность его эксплуатации. Если фундамент частного дома дал трещину, то, скорее всего, вид этой конструкции был выбран неправильно. Трещины основания частного дома в дальнейшем приведут к аварийному состоянию его стен и других элементов. Предотвратить такую ситуацию можно, если учесть все моменты, которые могут повлиять на надежность и долговечность фундамента частного дома.
      </Text>
      <Image src="./images/blogs/floor2.jpg"
        maxW="100%"
        w="650px"
        m="20px auto"
      />
      <Flex gap="30px" alignItems="center" m="40px 0">
        <Text className="blog__span">1</Text>
        <Heading as="h3">
          Свойства грунта
        </Heading>
      </Flex>
      <Text mt="20px">
        Выбирая вид фундамента, необходимо, прежде всего, учесть характеристики почвы на строительном участке. Для этого следует провести геологические исследования грунта. На основе анализа проб почвы специалисты смогут получить данные об уровне грунтовых вод в разное время года, определить пучинистость почвы и потенциальную просадку грунта. Кроме этого, следует учесть сейсмичность конкретного региона.
      </Text>
      <Text mt="20px">
        После того, как будут получены соответствующие данные, проектировщик сможет определить параметры планировки участка и рассчитать толщину слоя грунта, который необходимо убрать перед началом сооружения фундамента частного дома. Так как в морозную погоду почва вспучивается, необходимо рассчитать требуемый подъем фундамента. Если строительство дома планируется на участке со сложной почвой, предварительно должна быть создана специальная песчаная подушка.
      </Text>

      <Flex gap="30px" alignItems="center" m="40px 0">
        <Text className="blog__span">2</Text>
        <Heading as="h3">
          Нагрузки на фундамент
        </Heading>
      </Flex>

      <Text>
        Следующий фактор, который влияет на выбор вида конструкции фундамента, это максимальная нагрузка на основание. Для ее расчета нужно учесть массу всех строительных элементов (стен, перегородок, крыши), а также вес оборудования и мебельных гарнитуров. При расчете фундамента нужно учитывать опорную площадь конструкции, которая определяет степень давления на почву. У каждого вида почв есть свой максимально допустимый показатель сопротивления нагрузкам (R), который рассчитывается в т/м2. Чтобы определить R для конкретного дома, необходимо полный вес конструкции (включая массу фундамента) разделить на опорную площадь. Полученное значение не должно быть выше расчетного сопротивления грунта конкретного вида (найти такие показатели можно в специальных строительных справочниках или на специализированных интернет-порталах).
      </Text>
      <Image src="./images/blogs/floor3.jpg"
        maxW="100%"
        w="650px"
        m="20px auto"
      />

      <Flex gap="30px" alignItems="center" m="40px 0">
        <Text className="blog__span">3</Text>
        <Heading as="h3">
          Глубина заложения
        </Heading>
      </Flex>
      <Text mt="20px">
        На расчет заглубления конструкции основания дома в почву влияет степень ее промерзания. Чем плотнее почва на строительном участке и чем выше ее влажность, тем большей будет глубина, на которую промерзает грунт. Таким образом, при высоком уровне грунтовых вод необходимо увеличивать опорную площадь фундамента либо больше заглублять его в землю.
      </Text>
      <Text mt="20px">
        Подушка из щебня и песка имеет противопучинистые свойства, что позволяет строить фундамент на почвах любого вида.
      </Text>
      <Text mt="20px">
        Наряду с глубиной заглубления конструкции фундамента гидрология участка определяет и особенности обустройства дренажа. Строительство на земле с неблагоприятной гидрологической обстановкой – намного более сложный процесс. Влага между элементами грунта после замерзания будет способствовать его деформации и выпячиванию. Особенно высокой пучинистостью отличаются суглинистые и глинистые почвы, а также пылеватые пески.
      </Text>
      <Text mt="20px">
        В условиях высоких показателей пучинистости фундамент следует закладывать на 50 см или 1 м глубже уровня промерзания. При минимальных показателях заливка фундамента должна проводиться на глубине минимум 1 м.
      </Text>

      <Flex gap="30px" alignItems="center" m="40px 0">
        <Text className="blog__span">4</Text>
        <Heading as="h3">
          Качество материала
        </Heading>
      </Flex>

      <Text>
        Основной составляющей бетонных фундаментов является цемент. Выбирая этот материал, нужно уделить внимание условиям и длительности его хранения.
      </Text>

      <Text>
        При проектировании разных видов фундамента следует обратить внимание на техногенные факторы и наличие других строений рядом со строительным участком. Дело в том, что расположенные соседние здания также оказывают нагрузку на почву, что может отразиться на надежности основания дома. Расчет и проектирование конструкции фундамента следует доверить опытному специалисту, который имеет соответствующее образование.
      </Text>

      <Heading as="h3">
        Ленточные виды фундаментов, применяемые в строительстве частных домов
      </Heading>

      <Image src="./images/blogs/floor4.jpg"
        maxW="100%"
        w="650px"
        m="20px auto"
      />

      <Text>
        Ленточные фундаменты относят к наиболее популярным видам конструкций в малоэтажном строительстве. Технология сооружения таких оснований предполагает трудоемкие земляные работы и связана с большим расходом бетонной смеси. Но эти отрицательные моменты не могут перевесить значительные преимущества ленточных фундаментов для домов из камня, кирпича, шлакоблоков и керамзитобетона перед другими конструкциями. Фундамент этого вида способен выдерживать большую массу всех конструкций здания и равномерно распределять нагрузку на почву, что обусловлено высокой площадью конструкции и большой опорной площадью.
      </Text>

      <Text>
        Он представляет собой монолитное основание из железобетона, которое обустраивается под всеми стеновыми конструкциями дома, включая несущие стены. Существующие виды ленточного фундамента для частного дома обходятся дороже за счет того, заливка бетона производится по всему периметру здания, а также под всеми перегородками. Но именно эта особенность обуславливает их повышенную надежность. Ленточные конструкции дают возможность обустраивать под зданием подвальные помещения, гаражи и пр. Для этого фундамент необходимо заглубить в землю на нужную глубину, но это не приводит к снижению несущих способностей конструкции.
      </Text>

      <Text>
        В зависимости от технологии монтажа различают два основных вида ленточных фундаментов: монолитные и сборные.
      </Text>

      <Heading as="h3">
        Монолитный ленточный фундамент
      </Heading>

      <Image src="./images/blogs/floor5.jpg"
        maxW="100%"
        w="650px"
        m="20px auto"
      />

      <Text>
      Чтобы обустроить такое основание для дома, нужно подготовить:
      </Text>
      <UnorderedList>
        <ListItem>песок</ListItem>
        <ListItem>щебенку</ListItem>
        <ListItem>цемент</ListItem>
        <ListItem>металлическую арматуру</ListItem>
        <ListItem>материал для обустройства опалубки</ListItem>
      </UnorderedList>

      <Text>
      Перед началом выполнения бетонных работ необходимо выкопать траншею по периметру всех стен и перегородок. Ширина такой траншеи зависит от толщины стен и находится в пределах от 40 до 80 см. Необходимо, что она была шире, чем проектная толщина фундамента на 100 – 150 мм. Этот запас необходим для сооружения опалубки. Опалубка сооружается из специальных щитов или доски. Когда ее обустройство будет завершено, необходимо связать армирующий пояс. Для этого используется арматура диаметром от 1 до 1,8 см. Если планируется сооружение дома высотой более, чем 1 этаж, обвязка арматуры должна осуществляться не только в подземной, но и в надземной части фундамента.
      </Text>

      <Text>
      Бетонная смесь для заливки фундамента может замешиваться непосредственно на строительном участке. Кроме того, можно заказать доставку «заводского» бетона. Его заливка в опалубку осуществляется на всю высоту конструкции фундамента за день. Это позволит обеспечить требуемую прочность конструкции и ее влагоустойчивость. Часто застройщики совершают ошибку, разделяя процесс заливки на 2 дня: сначала заполняют траншею, а на следующий день заливают верхнее пространство опалубки. В результате между слоями бетона образуется шов, который способствует проникновению влаги.
      </Text>

      <Text>
      Одно из преимуществ монолитных конструкций разных видов ленточных фундаментов заключается в том, что им можно придать любую форму. По такой технологии можно обустроить основание для дома сложной конфигурации. Нужно только грамотной обустроить опалубку и связать надежный армирующий пояс.
      </Text>

    </Flex >
  )
}

export default blogItem