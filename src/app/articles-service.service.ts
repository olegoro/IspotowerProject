import { Injectable } from '@angular/core';
import { Article } from './article/article';

@Injectable({
  providedIn: 'root',
})
export class ArticlesServiceService {
  articles: Article[] = [
    {
      id: 0,
      header: 'Header 0',
      subHeader:
        'Federal prosecutors sought information about the former president’s role in the efforts to overturn the election as the inquiry accelerates.',
      story:
        'Federal prosecutors have directly asked witnesses in recent days about former President Donald J. Trump’s involvement in efforts to reverse his election loss, a person familiar with the testimony said on Tuesday, suggesting that the Justice Department’s criminal investigation has moved into a more aggressive and politically fraught phase. Mr. Trump’s personal role in elements of the push to overturn his loss in 2020 to Joseph R. Biden Jr. has long been established, both through his public actions and statements and evidence gathered by the House committee investigating the Jan. 6 attack.',
    },
    {
      id: 1,
      header: 'Header 1',
      subHeader:
        'But the Justice Department has been largely silent about how and even whether it would weigh pursuing potential charges against Mr. Trump, and reluctant even to concede that his role was.',
      story:
        'Mr. Trump, and reluctant even to concede that his role was discussed in senior leadership meetings at the department. Asking questions about Mr. Trump in connection with the electors plot or the attack on the Capitol does not mean the Justice Department has opened a criminal investigation into him, a decision that would have immense political and legal ramifications.',
    },
    {
      id: 2,
      header: 'Header 2',
      subHeader:
        'The department’s investigation into a central element of the push to keep Mr. Trump in office — the plan to name slates of electors pledged to Mr. Trump in battleground states won by Mr. Biden — now appears to be accelerating as prosecutors with the U.S.',
      story:
        'In April, before the committee convened its series of public hearings, Justice Department investigators received phone records of key officials and aides in the Trump White House, according to two people with knowledge of the situation. Two top aides to Vice President Mike Pence testified to the federal grand jury in the case last week, and prosecutors have issued subpoenas and search warrants to a growing number of figures tied to Mr. Trump and the campaign to forestall his loss.A spokesman for Attorney General Merrick B. Garland declined to comment, saying the Justice Department did not provide details of',
    },
    {
      id: 3,
      header: 'Header 3',
      subHeader:
        'grand jury proceedings. The department’s questioning of witnesses about Mr. Trump and its receipt of the phone records were reported earlier by The Washington Post.',
      story:
        'If a decision were made to open a criminal investigation into Mr. Trump after he announced his intention to run in the 2024 election, as he continues to hint he might do, the department’s leadership would be required to undertake a formal consultation process, then sign a formal approval of the department’s intentions under an internal rule created by former Attorney General William P. Barr and endorsed by Mr. Garland.But in recent days, Mr. Garland has repeatedly asserted his right to investigate or prosecute anybody, including Mr. Trump, provided that is where the evidence leads.',
    },
    {
      id: 4,
      header: 'Header 4',
      subHeader:
        'The Justice Department has from the beginning been moving urgently to learn everything we can about this period, and to bring to justice everybody who was criminally responsible for interfering',
      story:
        'with the peaceful transfer of power from one administration to another, which is the fundamental element of our democracy,” Mr. Garland told “NBC Nightly News” in an interview broadcast on Tuesday, when asked to comment on criticism that his investigation was moving too slowly. The questions about Mr. Trump focused on, among other topics, the plan he was pushing to derail congressional certification of Mr. Biden’s Electoral College victory on Jan. 6, 2021, the person familiar with the testimony said.',
    },
    {
      id: 5,
      header: 'Header 5',
      subHeader:
        'The two Pence aides who testified to the grand jury — Marc Short, who was his chief of staff, and Greg Jacob, who was his counsel — were present at an Oval Office meeting on Jan. 4, 2021, when Mr.',
      story:
        'Trump sought to pressure Mr. Pence into embracing the plan to cite the competing slates of electors as justification to block or delay the Electoral College certification. In recent weeks, the Justice Department also seized phones from two key figures, John Eastman, the lawyer who helped develop and promote the plan to upend the Electoral College certification, and Jeffrey Clark, a former Justice Department official who was at the center of the related push to send the slates of electors pledged to Mr. Trump from states Mr. Biden won.',
    },
    {
      id: 6,
      header: 'Header 6',
      subHeader:
        'Prosecutors have also issued grand jury subpoenas to figures connected to the so-called fake electors scheme. Those who have received the subpoenas have largely been state lawmakers or',
      story:
        'In addresses from two hotel ballrooms less than a mile apart in Washington, Mr. Trump and Mike Pence, the vice president whom he had left at the mercy of a mob of his supporters during the Capitol riot, put on clear display one of the most uncomfortable splits inside their party. The competing speeches on the same day would have been inconceivable for a former president and his own vice president not long ago. But the demise of precedent has long been a hallmark of the Trump era.',
    },
    {
      id: 7,
      header: 'Header 7',
      subHeader:
        'The strange tableau also illustrated many Republicans’ frustrations and reservations about a 2024 Trump campaign, which a recent New York Times/Siena College poll suggested could cause large',
      story:
        'The two appearances also underscored the wide gap in enthusiasm among Republicans between Mr. Trump and any other potential primary rival in 2024. While Mr. Pence drew tepid applause during his 30-minute address to about 250 attendees at an event hosted by the Young America’s Foundation, Mr. Trump commanded numerous standing ovations from an audience of about 800 people at a gathering of the America First Policy Institute. The former president’s speech seemed to double as a reunion for former administration officials, campaign aides and informal advisers.',
    },
  ];

  constructor() {}

  getArticle(id: number) {
    return this.articles[id];
  }
}
