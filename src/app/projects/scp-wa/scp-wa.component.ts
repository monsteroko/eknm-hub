import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DisplayParagraph } from 'src/app/articles/display-paragraph';
import { ParagraphType } from 'src/app/models/article';

@Component({
  selector: 'app-scp-wa',
  templateUrl: './scp-wa.component.html',
  styleUrls: ['./scp-wa.component.css']
})
export class ScpWaComponent implements OnInit {

  constructor(private router: Router) { }

  paragraphs: DisplayParagraph[] = [];

  ngOnInit(): void {
    this.paragraphs.push({
      type: "image",
      subclass: "",
      paragraph: {
        type: ParagraphType.Text,
        text: "",
        link: "../../../assets/projects/scp-wa/bg1.jpg"
      }
    })
    this.paragraphs.push({
      type: "text",
      subclass: "",
      paragraph: {
        type: ParagraphType.Text,
        text: "SCP: WA является глобальной стратегией в реальном времени. Игрок управляет Фондом SCP от лица Основателя. Основной целью является постановка на содержание различных аномалий, появляющихся в мире по мере игры. Игроку придётся развивать агентурную сеть чтобы как можно быстрее обнаруживать новые аномалии, создавать мобильные оперативные группы, улучшать их, для непосредственной постановки на содержание, а так же строить и развивать зоны, в которых будут содержаться аномальные объекты. При всем этом деятельность Фонда должна оставаться в тени, человечество не должно знать о существовании чего-то отличающегося от привычного для них мира. В игре присутствуют три вида ресурсов: опыт, знания и класс D (сорре, уже не помню как мы их договорились называть). Опыт игрок получает путём успешного захвата и сдерживания аномальных объектов. За счёт опыта можно нанимать новых работников Фонда, увеличивать количество доступных для строительства зон, увеличивать влияние Фонда в мире, прочее. Прирост знаний зависит от количества аномальных объектов, поставленных на содержание, свойства которых исследуются. От скорости прироста знаний зависит скорость исследования технологий. Исследования могут проводиться в разных областях: экипировка МОГ, строительство зон, способы содержания объектов, прочее. Класс д необходим для поддержания прироста знаний - человеческий ресурс, который расходуется для изучения аномальных объектов. Прирост класса д зависит от влияния Фонда в мире. В игре присутствуют множество концовок, среди которых хорошая только одна - Фонд смог распространить своё влияние по всему миру и поставить на содержание все объекты.",
        link: ""
      }
    })
  }

  navigateToProjects() {
    this.router.navigate(['/projects']);
  }

  viewRepo() {
    window.open('https://github.com/monsteroko/SCPF-WA');
  }

}
