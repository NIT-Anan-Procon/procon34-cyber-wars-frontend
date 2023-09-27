import { Button } from '@/components/Elements';
import { useFetchChallengeQuery } from '@/features/challenge';
import { Lock } from '@mui/icons-material';

export const HintButtonList= () => {
  const { data: vulnerabilities, isLoading }= useFetchChallengeQuery({});

  if( isLoading ) {
    return <>loading</>
  };

  if( !vulnerabilities ) return null;

  return (
    <ul>
      { 
        vulnerabilities?.data?.map(( item, index ) => (
          <li key={ index } >
            <Button><Lock /></Button>
          </li>
        ))
      }
    </ul>
  );
};