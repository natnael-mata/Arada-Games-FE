import { Component, OnInit } from '@angular/core';

interface LeaderboardEntry {
  name: string;
  points: number;
}

@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.scss']
})
export class LeaderBoardComponent implements OnInit {

  activeTab: string = 'Daily';
  currentPage: number = 1;
  pageSize: number = 5;

  leaderboardData: { [key: string]: LeaderboardEntry[] } = {
    Daily: [
      { name: 'Abebe Debebe', points: 2500 },
      { name: 'Kebede Alemu', points: 2200 },
      { name: 'Sara Mekonnen', points: 2000 },
      { name: 'Musa Bekele', points: 1800 },
      { name: 'Liya Girmay', points: 1600 },
      { name: 'Kalkidan Fikre', points: 1400 },
      { name: 'Tesfaye Merga', points: 1200 },
      { name: 'Alemu Bekele', points: 1000 },
        { name: 'Abebe Debebe', points: 2500 },
      { name: 'Kebede Alemu', points: 2200 },
      { name: 'Sara Mekonnen', points: 2000 },
      { name: 'Musa Bekele', points: 1800 },
      { name: 'Liya Girmay', points: 1600 },
      { name: 'Kalkidan Fikre', points: 1400 },
      { name: 'Tesfaye Merga', points: 1200 },
      { name: 'Alemu Bekele', points: 1000 },
      { name: 'Selamawit D.', points: 900 }
    ],
    Weekly: [
      { name: 'Lily Thomas', points: 8000 },
      { name: 'Daniel Yohannes', points: 7700 },
      { name: 'Hanna Kidane', points: 7500 },
      { name: 'Amanuel Haile', points: 7300 },
      { name: 'Marta Asfaw', points: 7100 },
      { name: 'Nahom Elias', points: 6900 }
    ],
    Monthly: [
      { name: 'Jonas Abate', points: 30000 },
      { name: 'Kidist Tesfaye', points: 29500 },
      { name: 'Robel Tamiru', points: 29000 },
      { name: 'Helen Abebe', points: 28500 },
      { name: 'Brook Desta', points: 28000 },
      { name: 'Meti Solomon', points: 27500 }
    ],
    'All time': [
      { name: 'Champion One', points: 100000 },
      { name: 'Champion Two', points: 98000 },
      { name: 'Champion Three', points: 95000 },
      { name: 'Champion Four', points: 92000 },
      { name: 'Champion Five', points: 90000 },
      { name: 'Champion Six', points: 87000 },
      { name: 'Champion Seven', points: 85000 },
      { name: 'Champion Eight', points: 83000 }
    ]
  };

  get displayedData(): LeaderboardEntry[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.leaderboardData[this.activeTab].slice(start, start + this.pageSize);
  }

  get totalPages(): number {
    return Math.ceil(this.leaderboardData[this.activeTab].length / this.pageSize);
  }

  changeTab(tab: string) {
    this.activeTab = tab;
    this.currentPage = 1;
  }

  goToPage(page: any) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  /** Build pagination with ellipsis */
  get paginationRange(): (number | string)[] {
    const total = this.totalPages;
    const current = this.currentPage;
    const range: (number | string)[] = [];

    if (total <= 5) {
      for (let i = 1; i <= total; i++) range.push(i);
    } else {
      range.push(1);

      if (current > 3) {
        range.push('...');
      }

      const start = Math.max(2, current - 1);
      const end = Math.min(total - 1, current + 1);

      for (let i = start; i <= end; i++) {
        range.push(i);
      }

      if (current < total - 2) {
        range.push('...');
      }

      range.push(total);
    }

    return range;
  }

  constructor() {}

  ngOnInit(): void {}
}
