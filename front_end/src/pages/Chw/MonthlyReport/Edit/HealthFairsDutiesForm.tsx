import React from 'react';
import ChwEditFormProps from './ChwEditFormProps';
import { FormStatus, readEventValueAsNum } from '../../../../api/chws';
import { Box, Button, Form, Heading } from 'grommet';
import Spinner from '../../../../components/Spinner/Spinner';
import ChwFormField from './ChwFormField';

const HealthFairsDutiesForm = (props: ChwEditFormProps) => {
  const { report, onSubmit, updateFn, formEvent } = props;

  if (formEvent.status === FormStatus.Submit) {
    return (
      <Box direction={'column'} fill>
        <Spinner size={228} />
      </Box>
    );
  }

  return (
    <Box
      direction={'column'}
      fill
      margin={{ left: 'medium' }}
      overflow={'auto'}
    >
      <Heading level={2}>Duties Performed: Health Fairs</Heading>
      <Form onSubmit={onSubmit}>
        <Box
          direction={'row'}
          align={'start'}
          gap={'small'}
          margin={{ right: 'large', top: 'small' }}
        >
          <ChwFormField
            label={'1 - 4: '}
            maleValue={
              report.report.dutiesPerformed.healthFairsInCommunity.oneToFour
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.healthFairsInCommunity.oneToFour
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthFairsInCommunity: {
                      ...report.report.dutiesPerformed.healthFairsInCommunity,
                      oneToFour: {
                        ...report.report.dutiesPerformed.healthFairsInCommunity
                          .oneToFour,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthFairsInCommunity: {
                      ...report.report.dutiesPerformed.healthFairsInCommunity,
                      oneToFour: {
                        ...report.report.dutiesPerformed.healthFairsInCommunity
                          .oneToFour,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'oneToFour.male'}
            femaleFieldName={'oneToFour.female'}
          />
          <ChwFormField
            label={'5 - 9: '}
            maleValue={
              report.report.dutiesPerformed.healthFairsInCommunity.fiveToNine
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.healthFairsInCommunity.fiveToNine
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthFairsInCommunity: {
                      ...report.report.dutiesPerformed.healthFairsInCommunity,
                      fiveToNine: {
                        ...report.report.dutiesPerformed.healthFairsInCommunity
                          .fiveToNine,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthFairsInCommunity: {
                      ...report.report.dutiesPerformed.healthFairsInCommunity,
                      fiveToNine: {
                        ...report.report.dutiesPerformed.healthFairsInCommunity
                          .fiveToNine,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'fiveToNine.male'}
            femaleFieldName={'fiveToNine.female'}
          />
          <ChwFormField
            label={'10 - 14: '}
            maleValue={
              report.report.dutiesPerformed.healthFairsInCommunity.tenToFourteen
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.healthFairsInCommunity.tenToFourteen
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthFairsInCommunity: {
                      ...report.report.dutiesPerformed.healthFairsInCommunity,
                      tenToFourteen: {
                        ...report.report.dutiesPerformed.healthFairsInCommunity
                          .tenToFourteen,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthFairsInCommunity: {
                      ...report.report.dutiesPerformed.healthFairsInCommunity,
                      tenToFourteen: {
                        ...report.report.dutiesPerformed.healthFairsInCommunity
                          .tenToFourteen,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'tenToFourteen.male'}
            femaleFieldName={'tenToFourteen.female'}
          />
          <ChwFormField
            label={'15 - 19: '}
            maleValue={
              report.report.dutiesPerformed.healthFairsInCommunity
                .fifteenToNineteen.male
            }
            femaleValue={
              report.report.dutiesPerformed.healthFairsInCommunity
                .fifteenToNineteen.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthFairsInCommunity: {
                      ...report.report.dutiesPerformed.healthFairsInCommunity,
                      fifteenToNineteen: {
                        ...report.report.dutiesPerformed.healthFairsInCommunity
                          .fifteenToNineteen,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthFairsInCommunity: {
                      ...report.report.dutiesPerformed.healthFairsInCommunity,
                      fifteenToNineteen: {
                        ...report.report.dutiesPerformed.healthFairsInCommunity
                          .fifteenToNineteen,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'fifteenToNineteen.male'}
            femaleFieldName={'fifteenToNineteen.female'}
          />
        </Box>
        <Box
          direction={'row'}
          align={'start'}
          gap={'small'}
          margin={{ right: 'large', top: 'small' }}
        >
          <ChwFormField
            label={'20 - 24: '}
            maleValue={
              report.report.dutiesPerformed.healthFairsInCommunity
                .twentyToTwentyFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.healthFairsInCommunity
                .twentyToTwentyFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthFairsInCommunity: {
                      ...report.report.dutiesPerformed.healthFairsInCommunity,
                      twentyToTwentyFour: {
                        ...report.report.dutiesPerformed.healthFairsInCommunity
                          .twentyToTwentyFour,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthFairsInCommunity: {
                      ...report.report.dutiesPerformed.healthFairsInCommunity,
                      twentyToTwentyFour: {
                        ...report.report.dutiesPerformed.healthFairsInCommunity
                          .twentyToTwentyFour,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'twentyToTwentyFour.male'}
            femaleFieldName={'twentyToTwentyFour.female'}
          />
          <ChwFormField
            label={'25 - 29: '}
            maleValue={
              report.report.dutiesPerformed.healthFairsInCommunity
                .twentyFiveToTwentyNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.healthFairsInCommunity
                .twentyFiveToTwentyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthFairsInCommunity: {
                      ...report.report.dutiesPerformed.healthFairsInCommunity,
                      twentyFiveToTwentyNine: {
                        ...report.report.dutiesPerformed.healthFairsInCommunity
                          .twentyFiveToTwentyNine,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthFairsInCommunity: {
                      ...report.report.dutiesPerformed.healthFairsInCommunity,
                      twentyFiveToTwentyNine: {
                        ...report.report.dutiesPerformed.healthFairsInCommunity
                          .twentyFiveToTwentyNine,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'twentyFiveToTwentyNine.male'}
            femaleFieldName={'twentyFiveToTwentyNine.female'}
          />
          <ChwFormField
            label={'30 - 34: '}
            maleValue={
              report.report.dutiesPerformed.healthFairsInCommunity
                .thirtyToThirtyFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.healthFairsInCommunity
                .thirtyToThirtyFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthFairsInCommunity: {
                      ...report.report.dutiesPerformed.healthFairsInCommunity,
                      thirtyToThirtyFour: {
                        ...report.report.dutiesPerformed.healthFairsInCommunity
                          .thirtyToThirtyFour,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthFairsInCommunity: {
                      ...report.report.dutiesPerformed.healthFairsInCommunity,
                      thirtyToThirtyFour: {
                        ...report.report.dutiesPerformed.healthFairsInCommunity
                          .thirtyToThirtyFour,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'thirtyToThirtyFour.male'}
            femaleFieldName={'thirtyToThirtyFour.female'}
          />
          <ChwFormField
            label={'35 - 39: '}
            maleValue={
              report.report.dutiesPerformed.healthFairsInCommunity
                .thirtyFiveToThirtyNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.healthFairsInCommunity
                .thirtyFiveToThirtyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthFairsInCommunity: {
                      ...report.report.dutiesPerformed.healthFairsInCommunity,
                      thirtyFiveToThirtyNine: {
                        ...report.report.dutiesPerformed.healthFairsInCommunity
                          .thirtyFiveToThirtyNine,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthFairsInCommunity: {
                      ...report.report.dutiesPerformed.healthFairsInCommunity,
                      thirtyFiveToThirtyNine: {
                        ...report.report.dutiesPerformed.healthFairsInCommunity
                          .thirtyFiveToThirtyNine,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'thirtyFiveToThirtyNine.male'}
            femaleFieldName={'thirtyFiveToThirtyNine.female'}
          />
        </Box>
        <Box
          direction={'row'}
          align={'start'}
          gap={'small'}
          margin={{ right: 'large', top: 'small' }}
        >
          <ChwFormField
            label={'40 - 44: '}
            maleValue={
              report.report.dutiesPerformed.healthFairsInCommunity
                .fortyToFortyFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.healthFairsInCommunity
                .fortyToFortyFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthFairsInCommunity: {
                      ...report.report.dutiesPerformed.healthFairsInCommunity,
                      fortyToFortyFour: {
                        ...report.report.dutiesPerformed.healthFairsInCommunity
                          .fortyToFortyFour,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthFairsInCommunity: {
                      ...report.report.dutiesPerformed.healthFairsInCommunity,
                      fortyToFortyFour: {
                        ...report.report.dutiesPerformed.healthFairsInCommunity
                          .fortyToFortyFour,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'fortyToFortyFour.male'}
            femaleFieldName={'fortyToFortyFour.female'}
          />
          <ChwFormField
            label={'45 - 49: '}
            maleValue={
              report.report.dutiesPerformed.healthFairsInCommunity
                .fortyFiveToFortyNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.healthFairsInCommunity
                .fortyFiveToFortyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthFairsInCommunity: {
                      ...report.report.dutiesPerformed.healthFairsInCommunity,
                      fortyFiveToFortyNine: {
                        ...report.report.dutiesPerformed.healthFairsInCommunity
                          .fortyFiveToFortyNine,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthFairsInCommunity: {
                      ...report.report.dutiesPerformed.healthFairsInCommunity,
                      fortyFiveToFortyNine: {
                        ...report.report.dutiesPerformed.healthFairsInCommunity
                          .fortyFiveToFortyNine,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'fortyFiveToFortyNine.male'}
            femaleFieldName={'fortyFiveToFortyNine.female'}
          />
          <ChwFormField
            label={'50 - 54: '}
            maleValue={
              report.report.dutiesPerformed.healthFairsInCommunity
                .fiftyToFiftyFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.healthFairsInCommunity
                .fiftyToFiftyFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthFairsInCommunity: {
                      ...report.report.dutiesPerformed.healthFairsInCommunity,
                      fiftyToFiftyFour: {
                        ...report.report.dutiesPerformed.healthFairsInCommunity
                          .fiftyToFiftyFour,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthFairsInCommunity: {
                      ...report.report.dutiesPerformed.healthFairsInCommunity,
                      fiftyToFiftyFour: {
                        ...report.report.dutiesPerformed.healthFairsInCommunity
                          .fiftyToFiftyFour,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'fiftyToFiftyFour.male'}
            femaleFieldName={'fiftyToFiftyFour.female'}
          />
          <ChwFormField
            label={'55 - 59: '}
            maleValue={
              report.report.dutiesPerformed.healthFairsInCommunity
                .fiftyFiveToFiftyNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.healthFairsInCommunity
                .fiftyFiveToFiftyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthFairsInCommunity: {
                      ...report.report.dutiesPerformed.healthFairsInCommunity,
                      fiftyFiveToFiftyNine: {
                        ...report.report.dutiesPerformed.healthFairsInCommunity
                          .fiftyFiveToFiftyNine,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthFairsInCommunity: {
                      ...report.report.dutiesPerformed.healthFairsInCommunity,
                      fiftyFiveToFiftyNine: {
                        ...report.report.dutiesPerformed.healthFairsInCommunity
                          .fiftyFiveToFiftyNine,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'fiftyFiveToFiftyNine.male'}
            femaleFieldName={'fiftyFiveToFiftyNine.female'}
          />
        </Box>
        <Box
          direction={'row'}
          align={'start'}
          gap={'small'}
          margin={{ right: 'large', top: 'small' }}
        >
          <ChwFormField
            label={'60 - 64: '}
            maleValue={
              report.report.dutiesPerformed.healthFairsInCommunity
                .sixtyToSixtyFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.healthFairsInCommunity
                .sixtyToSixtyFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthFairsInCommunity: {
                      ...report.report.dutiesPerformed.healthFairsInCommunity,
                      sixtyToSixtyFour: {
                        ...report.report.dutiesPerformed.healthFairsInCommunity
                          .sixtyToSixtyFour,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthFairsInCommunity: {
                      ...report.report.dutiesPerformed.healthFairsInCommunity,
                      sixtyToSixtyFour: {
                        ...report.report.dutiesPerformed.healthFairsInCommunity
                          .sixtyToSixtyFour,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'sixtyToSixtyFour.male'}
            femaleFieldName={'sixtyToSixtyFour.female'}
          />
          <ChwFormField
            label={'65+: '}
            maleValue={
              report.report.dutiesPerformed.healthFairsInCommunity
                .sixtyFiveOrMore.male
            }
            femaleValue={
              report.report.dutiesPerformed.healthFairsInCommunity
                .sixtyFiveOrMore.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthFairsInCommunity: {
                      ...report.report.dutiesPerformed.healthFairsInCommunity,
                      sixtyFiveOrMore: {
                        ...report.report.dutiesPerformed.healthFairsInCommunity
                          .sixtyFiveOrMore,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthFairsInCommunity: {
                      ...report.report.dutiesPerformed.healthFairsInCommunity,
                      sixtyFiveOrMore: {
                        ...report.report.dutiesPerformed.healthFairsInCommunity
                          .sixtyFiveOrMore,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'sixtyFiveOrMore.male'}
            femaleFieldName={'sixtyFiveOrMore.female'}
          />
        </Box>
        <Box flex align={'start'} margin={{ left: 'xxsmall', top: 'medium' }}>
          <Button type={'submit'} label={'Save'} primary />
        </Box>
      </Form>
    </Box>
  );
};

export default HealthFairsDutiesForm;
