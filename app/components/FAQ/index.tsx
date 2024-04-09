import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react'
import React from 'react'

function FAQ() {
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton _expanded={{ bg: '#FF7A00', color: 'white' }} p="15px 10px">
            <Box as="span" flex='1' textAlign='left' fontSize="20px" fontWeight="semibold">
            Предоставляете ли вы гарантии на работу? 
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        Да. Гарантийные обязательства прописываются в договоре. Сроки могут меняться в зависимости от комплектации проекта и выбранного материала для строительства.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton _expanded={{ bg: '#FF7A00', color: 'white' }} p="15px 10px">
            <Box as="span" flex='1' textAlign='left' fontSize="20px" fontWeight="semibold">
            Возможна ли поэтапная оплата работ? 
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        Поскольку весь процесс строительства выполняется поэтапно (устройство фундамента, сборка коробки, кровля, отделка), оплату можно вносить частями после завершения каждой стадии. Расчет производится только после подписания акта приемки сданного объема работ. 
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton _expanded={{ bg: '#FF7A00', color: 'white' }} p="15px 10px">
            <Box as="span" flex='1' textAlign='left' fontSize="20px" fontWeight="semibold">
            Сколько времени занимает строительство дома? 
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        Сроки строительства индивидуальны, они зависят от площади дома, технологии и материалов. Быстрее всего возводятся каркасные здания — к отделке можно приступать уже через 30-60 дней. Дома из газобетона, можно поставить за 2-4 месяча, преимущество данных домов, что не нужно ждать усадки. 
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton _expanded={{ bg: '#FF7A00', color: 'white' }} p="15px 10px">
            <Box as="span" flex='1' textAlign='left' fontSize="20px" fontWeight="semibold">
            С чего начинается строительство? 
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        Первый этап строительства дома — выбор проекта. Вы можете предложить свой, заказать индивидуальное проектирование или подобрать готовое решение. После этого подписывается договор, и можно приступать к работе. 
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton _expanded={{ bg: '#FF7A00', color: 'white' }} p="15px 10px">
            <Box as="span" flex='1' textAlign='left' fontSize="20px" fontWeight="semibold">
            Нужно ли вносить предоплату перед началом работ? 
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        Да, т.к. необходимо закупать материалы для начала работ.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton _expanded={{ bg: '#FF7A00', color: 'white' }} p="15px 10px">
            <Box as="span" flex='1' textAlign='left' fontSize="20px" fontWeight="semibold">
            Где размещается бригада? 
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        Для проживания строителей используются бытовки, которые мы доставляем на участок сами. Если на территории есть обустроенный садовый или дачный домик, по согласованию с заказчиком бригады могут разместиться в нем. 
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton _expanded={{ bg: '#FF7A00', color: 'white' }} p="15px 10px">
            <Box as="span" flex='1' textAlign='left' fontSize="20px" fontWeight="semibold">
            В какое время года вы строите? 

            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        Если речь идет о кирпиче, газобетоне, керамических блоках, построить дом можно с весны по декабрь.Если осенью температура опускается ниже 0, то работы продолжаются с определенными условиями (с удорожанием). Отделочные работы можно вести круглый год.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton _expanded={{ bg: '#FF7A00', color: 'white' }} p="15px 10px">
            <Box as="span" flex='1' textAlign='left' fontSize="20px" fontWeight="semibold">
            Какая может быть форма оплаты по договору подряда на строительство загородного дома?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        Форма оплаты по договору подряда на строительство загородного дома разная. Один из вариантов - наличный расчет, при котором заказчик осуществляет оплату за выполненные работы и поставленные материалы наличными деньгами и получает на руки соответствующие документы об оплате. Второй вариант - безналичный расчет, когда оплата производится через банковский перевод или другие электронные платежные системы. Третий вариант - использование ипотечного кредита. В таком случае, банк осуществляет оплату по договору подряда напрямую подрядчику, а заказчик выплачивает кредит банку в соответствии с условиями договора. В нашей компании есть штатный ипотечный брокер, который помогает нашим клиентам оформить ипотечный кредит.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton _expanded={{ bg: '#FF7A00', color: 'white' }} p="15px 10px">
            <Box as="span" flex='1' textAlign='left' fontSize="20px" fontWeight="semibold">
            Что такое холодный контур при строительстве загородного дома?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        Понятие холодный контур включает в себя: геодезические изыскания на участке, подготовка участка к строительству, возведение фундамента и коробки дома из выбранного заказчиком материала.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton _expanded={{ bg: '#FF7A00', color: 'white' }} p="15px 10px">
            <Box as="span" flex='1' textAlign='left' fontSize="20px" fontWeight="semibold">
            Из каких материалов вы сможете построить дом?

            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        Мы специализируемся на строительстве различных типов домов, включая каменные дома: из пеноблоков, газоблоков, керамзитоблоков, керамических блоков, кирпича и других материалов. И деревянные дома, в том числе каркасные. Каменные дома обладают прочностью и долговечностью. Деревянные дома, включая каркасные, отличаются натуральной красотой и экологичностью. Мы используем только качественные материалы и современные технологии, чтобы обеспечить высокое качество и надежность каждого построенного нами дома. Каждый проект рассматривается индивидуально, учитывая предпочтения, чтобы создать уютное пространство, отвечающее всем требованиям и стандартам.
        </AccordionPanel>
      </AccordionItem>



    </Accordion>
  )
}

export default FAQ