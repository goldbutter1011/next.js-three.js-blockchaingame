import { Clan } from './clan.enum';

export function resolveClan(clan: Clan): string {
  switch (clan) {
    case Clan.CLAN_1:
      return 'Clan 1';
    case Clan.CLAN_2:
      return 'Clan 2';
    case Clan.CLAN_3:
      return 'Clan 3';
    case Clan.CLAN_4:
      return 'Clan 4';
    default:
      return 'Unknown';
  }
}
