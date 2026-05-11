import { BasketballPage } from './basketball/BasketballPage';
import { VolleyballPage } from './volleyball/VolleyballPage';
import { TennisPage } from './tennis/TennisPage';
import { FoosballPage } from './foosball/FoosballPage';
import { JumpingRopePage } from './jumpingRope/JumpingRopePage';
import { CornholePage } from './cornhole/CornholePage';
import { DartsPage } from './darts/DartsPage';
import { ChessPage } from './chess/ChessPage';
import type { SportKey } from '../sports';

interface SportPageRouterProps {
  selectedSport: string | SportKey;
}

export function SportPageRouter({ selectedSport }: SportPageRouterProps) {
  const sportKey = selectedSport as SportKey;
  
  switch (sportKey) {
    case 'basketball':
      return <BasketballPage />;
    case 'volleyball':
      return <VolleyballPage />;
    case 'tennis':
      return <TennisPage />;
    case 'foosball':
      return <FoosballPage />;
    case 'jumpingRope':
      return <JumpingRopePage />;
    case 'cornhole':
      return <CornholePage />;
    case 'darts':
      return <DartsPage />;
    case 'chess':
      return <ChessPage />;
    default:
      return null;
  }
}
