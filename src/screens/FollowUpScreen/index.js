import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function OTPScreen() {
  const form = document.getElementById("form");
  const result = document.getElementById("result");

  return (
    <div classname="bg-indigo-200 h-screen w-screen">
      <div className="flex items-center min-h-screen bg-indigo-200 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
            <div className="text-center">
              <h5 className="my-3 text-3xl font-semibold fontsize-18 text-gray-700 dark:text-gray-200">
                ประกาศความเป็นส่วนตัว
              </h5>
              <div class="container mx-auto py-10 flex justify-center h-screen">
        <div class="w-12/12 pl-4  h-full flex flex-col">
          <div class="bg-white text-sm text-gray-500 font-bold px-5 py-2 shadow border-b border-gray-300">
            เงื่อนไข
          </div>

          <div
            class="w-full h-full overflow-auto text-left shadow bg-white"
            id="journal-scroll"
          >
            ข้อกำหนดและเงื่อนไขการใช้บริการ PowerCare OA
            ระบบพบแพทย์ผิวหนังออนไลน์ (ต่อไปนี้เรียกว่า "ผู้ให้บริการ”)
            ให้บริการ PowerCare OA (ซึ่งต่อไปนี้เรียกว่า“ บริการ”)
            แก่ผู้ใช้บริการ (ต่อไปนี้เรียกว่า“ ผู้ใช้”) ผ่านทาง LINE Application
            ซึ่งในการใช้บริการดังกล่าวจะอยู่ภายใต้ข้อกำหนดและเงื่อนไขการใช้บริการนี้
            การตกลงยอมรับข้อกำหนดและเงื่อนไขการใช้บริการ
            <p>
              {" "}
              &nbsp; 1.1
              เมื่อผู้ใช้ได้ใช้บริการนี้จะถือว่าผู้ใช้ได้ตกลงยอมรับข้อกำหนดและเงื่อนไขนี้แล้ว{" "}
            </p>
            <p>
              &nbsp; 1.2 หากผู้ใช้ประสงค์จะใช้บริการ PowerCare OA ใน Feature
              ซึ่งจำเป็นต้องเชื่อมโยงเข้าถึงแฟ้มการนัดหมาย, การใช้ยาผลตรวจต่าง ๆ
              เพื่อประโยชน์ในการให้บริการด้านสุขภาพรวมถึงการอำนวยความสะดวกให้แก่ผู้รับบริการเป็นรายเฉพาะนั้นผู้ใช้จะสามารถใช้
              Feature
              ดังกล่าวได้ก็ต่อเมื่อผู้ใช้ได้ลงทะเบียนสมัครแล้วเท่านั้นซึ่งผู้ใช้จะต้องกรอกข้อมูลส่วนตัวเพื่อระบุยืนยันตัวตนของผู้ใช้และในการลงทะเบียนดังกล่าวผู้ใช้ตกลงให้ความยินยอมแก่ผู้ให้บริการในอันที่จะแสดงข้อมูลเช่นว่านั้นผ่านบริการ
              PowerCare OA นี้ การตั้งค่าโปรไฟล์ (User Profile)
            </p>
            <p>
              &nbsp;2.1 เมื่อผู้ใช้ได้เพิ่มบริการ PowerCare OA
              เป็นเพื่อนของผู้ใช้แล้วระบบจะขอให้ผู้ใช้ตั้งค่าโปรไฟล์ (User
              Profile)
              เพื่อเป็นข้อมูลอ้างอิงในการให้บริการและการจัดส่งข้อมูลข่าวสารที่เกี่ยวข้องกับรายการที่ผู้ใช้ได้เลือกไว้{" "}
            </p>
            <p>
              &nbsp;2.2
              ผู้ใช้มีสิทธิ์ที่จะเลือกไม่รับข้อมูลหรือการแจ้งเตือนจากบริการได้ด้วยการบล๊อคไม่รับข้อมูลหรือการแจ้งเตือนโดยผู้ใช้รับทราบว่าการเลือกไม่รับข้อมูลหรือการแจ้งเตือนดังกล่าวอาจจะส่งผลกระทบต่อการใช้บริการนี้
              การเปลี่ยนแปลง จำกัด ระงับหรือยกเลิกการเข้าถึงหรือการให้บริการ
            </p>
            <p>
              &nbsp;3.1 บริการนี้เป็นการให้บริการตามสภาพที่เป็นอยู่ (AS IS)
              และมีอยู่ (AS AVAILABLE) ผู้ให้บริการสงวนสิทธิ์ที่จะเปลี่ยนแปลง
              จำกัด ระงับหรือยกเลิกการให้บริการนี้ในเวลาใด ๆ
              ก็ได้โดยไม่ต้องแจ้งให้ทราบล่วงหน้า{" "}
            </p>
            <p>
              &nbsp;3.2 ผู้ให้บริการสงวนสิทธิ์ที่จะ จำกัด
              การเข้าถึงบริการไม่ว่าทั้งหมดหรือ
              แต่เพียงบางส่วนตามเงื่อนไขที่ผู้ให้บริการเห็นสมควรเช่นอายุการระบุตัวตนเป็นต้นโดยไม่ต้องแจ้งให้ทราบล่วงหน้า
            </p>
            <p>
              &nbsp;3.3
              ผู้ให้บริการมีสิทธิระงับหรือยกเลิกการเข้าถึงการให้บริการนี้ได้ทันทีหากผู้ให้บริการสงสัยหรือเห็นว่าผู้ใช้ไม่ใช่เจ้าของหรือผู้มีสิทธิ์ใช้บริการดังกล่าวหรือมีการใช้บริการในลักษณะที่ขัดต่อข้อกำหนดและเงื่อนไขนี้หรือขัดต่อกฎหมายหรือความสงบเรียบร้อยหรือศีลธรรมอันดีของประชาชนหรือในลักษณะที่ผิดปกติหรือมีพฤติการณ์อันน่าเชื่อว่ามีการใช้บริการอันอาจก่อให้เกิดความเสียหายแก่บุคคลใด
              ๆ ไม่ว่าด้วยประการใด ๆ เนื้อหาที่ปรากฏในการให้บริการ{" "}
            </p>
            <p>
              &nbsp;4.1 เนื้อหาที่ปรากฏในการให้บริการ PowerCare OA
              นี้จัดทำขึ้นเพื่อวัตถุประสงค์ในการให้ข้อมูลเป็นการทั่วไปแก่ผู้ใช้เท่านั้นผู้ใช้ยอมรับว่าข้อมูลดังกล่าวไม่ว่าจะเกี่ยวกับการดูแลสุขภาพการป้องกันโรคการรักษาโรคหรือคำตอบอื่นใดที่ได้รับจากบริการ
              PowerCare OA
              นั้นไม่ถือเป็นคำแนะนำทางการแพทย์หรือเป็นการวินิจฉัยอาการหรือการรักษา
              แต่ประการใดและไม่อาจทดแทนคำแนะนำการวินิจฉัยอาการหรือการรักษาจากแพทย์ผู้เชี่ยวชาญได้และผู้ใช้จะไม่ยึดถือข้อมูลดังกล่าวหรือเปลี่ยนแปลงหรือหยุดการรักษาพยาบาลโดยปราศจากการหารือกับแพทย์ของผู้ใช้ก่อนผู้ให้บริการจะไม่รับผิดชอบในการที่ผู้ใช้นำข้อมูลดังกล่าวไปใช้ในประการใด
              ๆ{" "}
            </p>
            <p>
              &nbsp;4.2 เนื้อหาที่ปรากฏในการให้บริการ PowerCare OA
              นี้อาจเป็นเนื้อหาที่จัดทำโดยผู้ให้บริการเองหรือโดยบุคคลภายนอกไม่ว่าทั้งหมดหรือบางส่วนแม้ว่าผู้ให้บริการจะใช้ความพยายามอย่างดีที่สุดในการตรวจสอบความถูกต้องสมบูรณ์ของเนื้อหาที่ปรากฏบน
              PowerCare OA
              แต่เนื้อหาดังกล่าวอาจมีบางคราวที่บกพร่องผิดพลาดไม่สมบูรณ์หรือไม่เหมาะสม
              การเชื่อมต่อกับเว็ปไซต์อื่นในการให้บริการนี้อาจมีการเชื่อมต่อกับเว็ปไซต์อื่นไม่ว่าของผู้ให้บริการเองหรือของบุคคลภายนอกการใช้บริการเว็ปไซต์ดังกล่าวต้องอยู่ภายใต้ข้อกำหนดและเงื่อนไขของเว็ปไซต์นั้น
              ๆ
              ในกรณีที่เป็นการเชื่อมต่อกับเว็ปไซต์ของบุคคลภายนอกผู้ใช้ยอมรับว่าผู้ให้บริการไม่ได้มีส่วนเกี่ยวข้องหรือรับรองเว็ปไซต์ของบุคคลดังกล่าวและจะไม่รับผิดชอบในเนื้อหาข้อมูลโฆษณาที่แสดงบนเว็ปไซต์ดังกล่าวด้วย
              การบันทึกและการคุ้มครองข้อมูลส่วนบุคคลของผู้ใช้{" "}
            </p>
            <p>
              &nbsp;6.1
              ผู้ใช้รับทราบและตกลงให้ผู้ให้บริการสามารถทำการบันทึกบทสนทนาระหว่างผู้ใช้กับผู้ให้บริการและ
              / หรือจัดเก็บและ / หรือบันทึกและ /
              หรือประมวลผลข้อมูลเกี่ยวกับผู้ใช้และ / หรือรายการการใช้บริการและ /
              หรือการดำเนินการใด ๆ
              ที่เกี่ยวข้องกับการใช้บริการของผู้ใช้เพื่อประโยชน์ในการปรับปรุงการบริการของผู้ให้บริการและ
              / หรือเพื่อการใด ๆ
              ได้ตามที่ผู้ให้บริการเห็นสมควรและเพื่อเป็นหลักฐานการบริการและรายการใช้บริการ
              แต่ทั้งนี้ผู้ให้บริการไม่มีหน้าที่ต้องทำหรือเก็บรักษาบันทึกสนทนาและ
              /
              หรือข้อมูลดังกล่าวโดยผู้ใช้ตกลงให้ความยินยอมในการยอมรับบันทึกการสนทนาและข้อมูลดังกล่าวเป็นพยานหลักฐานและยืนยันผู้ใช้และให้ผู้ให้บริการใช้บันทึกการสนทนาและข้อมูลดังกล่าวในกระบวนพิจารณาใด
              ๆ หรือตามที่ผู้ให้บริการเห็นสมควร
            </p>
            <p>
              &nbsp;6.2
              เพื่อพัฒนาประสิทธิภาพในการให้บริการความสะดวกแก่การใช้ผู้ให้บริการขอสงวนสิทธิ์ที่จะสอบถามข้อมูลของผู้ใช้หากผู้ใช้ได้ส่งข้อมูลให้แก่ผู้ให้บริการให้ถือว่าผู้ใช้ได้ตกลงยินยอมให้ผู้ให้บริการใช้ข้อมูลดังกล่าวตามวัตถุประสงค์ในการขอข้อมูลดังกล่าว
              ความรับผิดชอบของผู้ใช้{" "}
            </p>
            <p>
              &nbsp;7.1 ผู้ใช้ยอมรับความเสี่ยงจากการใช้บริการนี้และจะรับผิดชอบ
              แต่เพียงผู้เดียวสำหรับกิจกรรมใด ๆ ที่ได้ทำผ่านการให้บริการนี้{" "}
            </p>
            <p>
              &nbsp;7.2
              ผู้ใช้ตกลงปกป้องผู้ให้บริการจากการกล่าวหาหรือข้อเรียกร้องใดของบุคคลใด
              ๆ
              อันเกิดจากหรือเกี่ยวกับการที่ผู้ใช้ฝ่าฝืนกฎหมายหรือข้อกำหนดและเงื่อนไขฯ
              นี้หรือใช้บริการ PowerCare OA
              ในลักษณะที่อาจก่อให้เกิดความเสียหายต่อบุคคลอื่นและผู้ใช้ตกลงชดใช้ค่าเสียหายและค่าใช้จ่ายใด
              ๆ แก่ผู้ให้บริการอันเกิดจากการดังกล่าวด้วยไม่ว่าโดยตรงหรือโดยอ้อม
              (ซึ่งรวมถึง แต่ไม่ จำกัด
              เพียงค่าทนายความและค่าใช้จ่ายในการต่อสู้คดี)
              การแก้ไขเพิ่มเติมข้อกำหนดและเงื่อนไขการใช้บริการผู้ให้บริการอาจแก้ไขเพิ่มเติมข้อกำหนดและเงื่อนไขนี้เมื่อใดก็ได้โดยไม่จำเป็นต้องแจ้งให้ทราบล่วงหน้าผู้ให้บริการจะแจ้งให้ผู้ใช้ทราบถึงการแก้ไขเพิ่มเติมดังกล่าวผ่านทาง
              PowerCare OA
              หรือวิธีการอื่นใดที่ผู้ให้บริการเห็นสมควรการที่ผู้ใช้ยังคงใช้บริการนี้ต่อไปให้ถือว่าผู้ใช้รับทราบและตกลงผูกพันตามการแก้ไขเพิ่มเติมดังกล่าวเมื่อมีการประกาศข้อกำหนดและเงื่อนไขเช่นว่านั้น
              ความสมบูรณ์ของข้อกำหนดและเงื่อนไขในกรณีที่ปรากฏว่ามีข้อกำหนดหรือเงื่อนไขใดในเอกสารนี้ไม่สมบูรณ์ตกเป็นโมฆะหรือใช้บังคับไม่ได้ไม่ว่าด้วยประการใด
              ๆ
              ให้ถือว่าข้อกำหนดหรือเงื่อนไขที่ไม่สมบูรณ์ตกเป็นโมฆะหรือใช้บังคับไม่ได้ดังกล่าวนั้นไม่มีผลกระทบต่อความสมบูรณ์หรือการบังคับใช้ข้อกำหนดและเงื่อนไขอื่น
              ๆ ในเอกสารนี้
              กฎหมายที่ใช้บังคับข้อกำหนดและเงื่อนไขนี้ให้ใช้บังคับและตีความตามกฎหมายไทยและให้ศาลไทยเป็นศาลที่มีเขตอำนาจ
            </p>
            <div className="mb-6">
              <button className="w-80 px-3 py-3 text-white justify-center  bg-gray-300 rounded-md ">
                เข้าใจ และยืนยัน
              </button>
            </div>
          </div>
        </div>
      </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}